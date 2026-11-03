/* ------------------------------------------------------------------
   build.js — pre-renders the four pages into _site/ for GitHub Pages.

   The site needs no build to be developed: every page renders itself in
   the browser from js/data/*.js. This script runs that same renderer in
   jsdom and saves the filled HTML, so crawlers and link previews get the
   content without JavaScript. In the browser, dataloader.js then simply
   redraws the same markup and wires the interactive parts.

     npm ci && node build.js      ->  _site/ (what the Action publishes)
   ------------------------------------------------------------------ */
'use strict';
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT = __dirname;
const OUT = path.join(ROOT, '_site');
const BASE = 'https://chrissbill23.github.io/';
const PAGES = ['index.html', 'experience.html', 'projects.html', 'about.html'];
const SCRIPTS = ['js/data/profile.js', 'js/data/works.js', 'js/data/education.js', 'js/dataloader.js'];
const SKIP = new Set(['.git', '.github', '.idea', 'node_modules', '_site', 'build.js', 'package.json', 'package-lock.json', '.DS_Store']);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
for (const entry of fs.readdirSync(ROOT)) {
  if (SKIP.has(entry)) continue;
  fs.cpSync(path.join(ROOT, entry), path.join(OUT, entry), { recursive: true, filter: (src) => path.basename(src) !== '.DS_Store' });
}
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

const sources = SCRIPTS.map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8'));

for (const page of PAGES) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
  const dom = new JSDOM(html, { url: BASE + (page === 'index.html' ? '' : page), runScripts: 'outside-only', pretendToBeVisual: true });
  const { window } = dom;
  window.TextEncoder = TextEncoder;               // about.md byte count
  for (const src of sources) window.eval(src);    // same code the browser runs
  /* the reveal-on-scroll classes are added at runtime; keep the animation */
  window.document.querySelectorAll('.reveal.is-in').forEach((n) => n.classList.remove('is-in'));
  window.document.documentElement.setAttribute('data-prerendered', '');
  fs.writeFileSync(path.join(OUT, page), dom.serialize());
  const text = window.document.body.textContent.replace(/\s+/g, ' ').trim();
  console.log(`${page.padEnd(16)} ${String(text.length).padStart(6)} chars of text`);
  window.close();
}
console.log('done ->', path.relative(ROOT, OUT) + '/');

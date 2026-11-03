/* ------------------------------------------------------------------
   dataloader.js — renders every page from the data files:
     js/data/profile.js   -> SITE.profile
     js/data/works.js     -> SITE.experience, SITE.projects, SITE.projectDirs
     js/data/education.js -> SITE.education
   Which page to render is read from <body data-page="...">.
   No framework, no build step: plain DOM + template strings.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var S = window.SITE || {};
  var P = S.profile || {};
  var EXP = S.experience || [];
  var PRJ = S.projects || [];
  var EDU = S.education || [];
  var DIRS = S.projectDirs || [];
  var FILTERS = S.projectFilters || [];

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* brand marks are not in Lucide any more: inline them */
  var BRAND = {
    github: '<svg class="lucide" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
    linkedin: '<svg class="lucide" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>'
  };
  function ic(name, cls) {
    if (BRAND[name]) return BRAND[name];
    return '<i data-lucide="' + name + '"' + (cls ? ' class="' + cls + '"' : '') + '></i>';
  }
  function slug(s) { return String(s).toLowerCase().trim().replace(/\s+/g, '-'); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function cls(c) { return 'c-' + (c || 'green'); }
  function pad(n, w) { n = String(n); while (n.length < w) n = ' ' + n; return n; }
  function refreshIcons() { if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }
  function termBar(title, metaHtml) {
    return '<div class="term-bar"><span class="dots"><i></i><i></i><i></i></span>' +
      '<span class="title">' + esc(title) + '</span><span class="meta">' + (metaHtml || '') + '</span></div>';
  }

  var BRANCH = { main: 'green', consulting: 'cyan', research: 'violet', freelance: 'amber' };
  var MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  function fmtMonth(ym) { if (!ym) return 'PRESENT'; var p = ym.split('-'); return MONTHS[(+p[1] || 1) - 1] + ' ' + p[0]; }
  function year(ym) { return ym ? ym.slice(0, 4) : String(new Date().getFullYear()); }
  function techSlugs(e) { return (e.tech || []).map(slug); }
  function newestMainId() {
    var all = EXP.slice().sort(function (a, b) { return b.start.localeCompare(a.start); });
    return all.length ? all[0].id : null;
  }
  function headLabel(e) { return e.branch + ' · current'; }

  var page = document.body.getAttribute('data-page') || '';

  /* ================================================================
     NAV
     ================================================================ */
  var TABS = [
    { page: 'home', href: 'index.html', label: 'home.sh', icon: 'terminal', c: 'green' },
    { page: 'experience', href: 'experience.html', label: 'experience.log', icon: 'git-commit-horizontal', c: 'amber' },
    { page: 'projects', href: 'projects.html', label: 'projects/', icon: 'folder-git-2', c: 'cyan' },
    { page: 'about', href: 'about.html', label: 'about.md', icon: 'file-text', c: 'violet' }
  ];

  function renderNav() {
    var el = $('#site-nav'); if (!el) return;
    el.innerHTML =
      '<div class="nav-in">' +
        '<a class="brand" href="index.html" aria-label="Home">' +
          '<span class="u">' + esc(P.user) + '</span><span class="at">@</span><span class="h">' + esc(P.host) + '</span>' +
          '<span class="p">:~$&nbsp;</span><span class="cursor" aria-hidden="true"></span>' +
        '</a>' +
        '<div class="tabs-wrap"><nav class="tabs" aria-label="Pages">' +
          TABS.map(function (t) {
            var on = t.page === page;
            return '<a class="tab ' + cls(t.c) + (on ? ' is-active' : '') + '" href="' + t.href + '"' +
              (on ? ' aria-current="page"' : '') + '>' + ic(t.icon) + '<span>' + esc(t.label) + '</span></a>';
          }).join('') +
        '</nav></div>' +
        '<div class="nav-right">' +
          (P.openToWork ? '<span class="status"><i class="dot"></i><span>open_to_work=Yes</span></span>' : '') +
          '<div class="resume-wrap">' +
            '<a class="btn btn-green btn-sm" href="' + esc(P.resume) + '" download aria-label="Download resume (English)" aria-haspopup="true">' + ic('download') + '<span>resume.pdf</span></a>' +
            (P.resumes && P.resumes.length ? '<div class="resume-menu" role="menu" aria-label="Resume languages">' +
              '<div class="rm-head">$ resume --lang</div>' +
              P.resumes.map(function (r) {
                return '<a role="menuitem" href="' + esc(r[1]) + '" download>' + ic('file-text') + '<span class="code">' + esc(r[0]) + '</span><span>' + esc(r[2]) + '</span></a>';
              }).join('') + '</div>' : '') +
          '</div>' +
        '</div>' +
      '</div>';
    watchTabsOverflow(el.querySelector('.tabs'));
  }

  /* show a fade on the side(s) where the tab strip has more to scroll */
  function watchTabsOverflow(tabs) {
    if (!tabs) return;
    var wrap = tabs.parentNode;
    function update() {
      var max = tabs.scrollWidth - tabs.clientWidth;
      wrap.classList.toggle('can-left', tabs.scrollLeft > 2);
      wrap.classList.toggle('can-right', max - tabs.scrollLeft > 2);
    }
    tabs.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(tabs);
    update();
    var active = tabs.querySelector('.is-active');
    if (active && tabs.scrollWidth > tabs.clientWidth) {
      tabs.scrollLeft = Math.max(0, active.offsetLeft - (tabs.clientWidth - active.offsetWidth) / 2);
    }
  }

  /* ================================================================
     FOOTER (contact + status bar)
     ================================================================ */
  function renderFooter() {
    var el = $('#site-footer'); if (!el) return;
    var C = P.contact || {}, SB = P.statusBar || {};
    var h = C.headline || ['', '', ''];
    var cmd = C.command || {};
    var comment = document.body.getAttribute('data-contact-comment') || '// 05 ─── contact';

    function rowLink(key, val) {
      if (key === 'email') return '<a href="mailto:' + esc(val) + '">' + esc(val) + '</a>';
      if (key === 'github') return '<a href="' + esc(P.github) + '" target="_blank" rel="noopener">' + esc(val) + '</a>';
      if (key === 'web') return '<a href="https://' + esc(val) + '">' + esc(val) + '</a>';
      if (key === 'resume' && P.resumes) return P.resumes.map(function (r) {
        return '<a href="' + esc(r[1]) + '" download title="' + esc(r[2]) + '">' + esc(r[0]) + '.pdf</a>';
      }).join('<span class="faint"> · </span>');
      return esc(val);
    }
    var rows = (C.rows || []).map(function (r) {
      return '<div class="row"><span class="k">' + esc(r[0]) + '</span><span class="sep">:</span>' +
        '<span class="' + (r[2] ? 'c-' + r[2] : '') + '" style="' + (r[2] ? 'color:var(--c)' : '') + '">' + rowLink(r[0], r[1]) + '</span></div>';
    }).join('');

    var left = (SB.left || []).map(function (i) { return '<span>' + ic(i.icon) + esc(i.text) + '</span>'; }).join('');
    var right = (SB.right || []).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') +
      '<span>' + ic('map-pin') + esc(P.locationShort) + '</span>' +
      '<span>© ' + new Date().getFullYear() + ' ' + esc(SB.copyright || P.name) + ' · ' + esc(P.version) + '</span>';

    el.innerHTML =
      '<section class="contact wrap" id="contact">' +
        '<div class="contact-copy">' +
          '<div class="cmt">' + esc(comment) + '</div>' +
          '<h2 class="headline"><span>' + esc(h[0]) + '</span><span class="g">' + esc(h[1]) + '</span>' +
            '<span>' + esc(h[2]) + '<i class="cursor big" aria-hidden="true"></i></span></h2>' +
          '<p class="sub">' + esc(C.sub) + '</p>' +
          '<div class="btns">' +
            '<a class="btn btn-green" href="mailto:' + esc(P.email) + '">' + ic('mail') + esc(P.email) + '</a>' +
            '<a class="btn btn-ghost" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">' + ic('linkedin') + 'linkedin</a>' +
            '<a class="btn btn-ghost" href="' + esc(P.github) + '" target="_blank" rel="noopener">' + ic('github') + 'github</a>' +
          '</div>' +
        '</div>' +
        '<div class="term contact-term">' + termBar(C.terminalTitle || 'contact.sh — zsh', '<i class="livedot"></i>live') +
          '<div class="term-body">' +
            '<div class="line"><span class="g">$ </span><span>' + esc(cmd.cmd) + '</span><span class="cy">' + esc(cmd.flag) + '</span><span class="am">' + esc(cmd.value) + '</span></div>' +
            '<div class="line"><span class="g">[ok] </span><span class="dim">resolving candidate…</span></div>' +
            '<div class="sp"></div>' + rows + '<div class="sp"></div>' +
            '<div class="line"><span class="g">$ </span><i class="cursor" aria-hidden="true"></i></div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<div class="statusbar"><div class="grp">' + left + '</div><div class="grp">' + right + '</div></div>';
  }

  /* ================================================================
     HOME
     ================================================================ */
  function jsonToLines(value) {
    var lines = [];
    function tok(c, t) { return '<span class="' + c + '">' + esc(t) + '</span>'; }
    function prim(v) {
      if (typeof v === 'string') return tok('s', JSON.stringify(v));
      if (typeof v === 'number') return tok('n', String(v));
      if (typeof v === 'boolean') return tok('b', String(v));
      return tok('p', String(v));
    }
    function walk(v, indent, prefix, suffix) {
      var sp = new Array(indent + 1).join(' ');
      var isArr = Array.isArray(v);
      if (isArr && v.every(function (x) { return typeof x !== 'object'; })) {
        lines.push(sp + prefix + tok('p', '[') + v.map(prim).join(tok('p', ', ')) + tok('p', ']' + suffix));
        return;
      }
      if (v && typeof v === 'object') {
        lines.push(sp + prefix + tok('p', isArr ? '[' : '{'));
        var keys = Object.keys(v);
        keys.forEach(function (k, i) {
          var comma = i < keys.length - 1 ? ',' : '';
          walk(v[k], indent + 2, isArr ? '' : tok('k', JSON.stringify(k)) + tok('p', ': '), comma);
        });
        lines.push(sp + tok('p', (isArr ? ']' : '}') + suffix));
        return;
      }
      lines.push(sp + prefix + prim(v) + tok('p', suffix));
    }
    walk(value, 0, '', '');
    return lines;
  }

  function renderHome() {
    var H = P.hero || {};
    var left = $('#hero-left'), right = $('#hero-right');
    if (left) {
      left.innerHTML =
        '<div class="boot">' + (H.boot || []).map(function (b) {
          return '<div><span class="t">[' + esc(pad(b.t, 8)) + ']</span><span>' + esc(b.msg) + '</span>' + (b.ok ? '<span class="ok">[OK]</span>' : '') + '</div>';
        }).join('') + '</div>' +
        '<div class="prompt"><span class="a">➜</span><span class="d">~</span><span>who -am -i</span></div>' +
        '<h1 class="name">' + esc(P.name) + '</h1>' +
        '<div class="role"><span class="cy">' + esc((P.roles || [])[0]) + '</span><span class="amp">&amp;&amp;</span>' +
          '<span class="g">' + esc((P.roles || [])[1]) + '</span><i class="cursor" aria-hidden="true"></i></div>' +
        '<p class="bio">' + esc(H.bio) + '</p>' +
        '<div class="ctas">' +
          '<a class="btn btn-green btn-lg btn-glow" href="' + esc(H.primaryCta.href) + '">' + esc(H.primaryCta.label) + ic('arrow-right') + '</a>' +
          '<a class="btn btn-ghost btn-lg" href="' + esc(H.secondaryCta.href) + '">' + esc(H.secondaryCta.label) + '</a>' +
        '</div>';
    }
    if (right) {
      var lines = jsonToLines(P.modelCard || {});
      right.innerHTML =
        '<div class="term scan model-card">' + termBar('profile_card.json', '{ } JSON') +
          '<div class="term-body code">' + lines.map(function (l, i) {
            return '<div class="cl"><span class="ln">' + pad(i + 1, 2) + '</span>' + l + '</div>';
          }).join('') + '</div>' +
        '</div>' +
        '<div class="train"><div class="head"><span>' + esc((P.training || {}).task) + '</span><span class="g">' + esc((P.training || {}).epoch) + '</span></div>' +
          '<div class="prog" role="progressbar" aria-label="career progress"><i></i></div></div>';
    }

    var met = $('#metrics');
    if (met) met.innerHTML = (P.metrics || []).map(function (m) {
      return '<div class="metric ' + cls(m.color) + '"><span class="k">' + esc(m.key) + '</span><span class="v">' + esc(m.value) + '</span><span class="d">' + esc(m.desc) + '</span></div>';
    }).join('');

    var headId = newestMainId();
    var fx = $('#featured-exp');
    if (fx) fx.innerHTML = (P.featuredExperience || []).map(function (id) {
      var e = EXP.filter(function (x) { return x.id === id; })[0]; if (!e) return '';
      var f = e.featured || {};
      var ys = year(e.start), ye = e.end ? year(e.end) : 'now';
      return '<article class="commit ' + cls(BRANCH[e.branch]) + '">' +
        '<div class="graph"><div class="hash"><i class="node"></i><span>' + esc(e.hash) + '</span></div>' +
          '<div class="br">(' + esc(e.id === headId ? headLabel(e) : e.branch) + ')</div>' +
          '<div class="date">' + (ys === ye ? ys : ys + ' — ' + ye) + '</div></div>' +
        '<div class="msg"><div class="title"><h3>' + esc(e.company) + '</h3><span class="role">' + esc(e.role) + '</span></div>' +
          '<p>' + esc(f.summary || e.desc) + '</p></div>' +
        '<div class="tags">' + (f.chips || e.tech || []).map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>' +
      '</article>';
    }).join('');

    var fp = $('#featured-prj');
    if (fp) fp.innerHTML = (P.featuredProjects || []).map(function (f) {
      var p = PRJ.filter(function (x) { return x.id === f.id; })[0] || {};
      var m = f.metric || {};
      return '<article class="pcard ' + cls(f.color) + '">' +
        '<div class="ptab"><span class="file">' + ic('file-code') + esc(f.file || p.file) + '</span>' +
          (f.href ? '<a class="open" href="' + esc(f.href) + '" aria-label="Read about ' + esc(f.title) + '">' + ic('arrow-up-right') + '</a>'
           : p.url ? '<a class="open" href="' + esc(p.url) + '" target="_blank" rel="noopener" aria-label="Open ' + esc(f.title) + '">' + ic('arrow-up-right') + '</a>'
                   : '<a class="open" href="projects.html" aria-label="All projects">' + ic('arrow-up-right') + '</a>') + '</div>' +
        '<div class="pcard-body"><div class="cat"># ' + esc(f.cat) + '</div><h3>' + esc(f.title || p.title) + '</h3><p>' + esc(f.desc || p.desc) + '</p>' +
          '<div class="mline"><span class="faint">&gt;&gt;&gt; </span><span class="cy">' + esc(m.key) + '</span><span class="faint"> = </span>' +
          '<span class="' + (m.kind === 'num' ? 'pk' : 'am') + ' b">' + esc(m.value) + '</span></div></div>' +
      '</article>';
    }).join('');

    var st = $('#stack');
    if (st) st.innerHTML = (P.stackLayers || []).map(function (L, i, all) {
      return '<div class="layer ' + cls(L.color) + '"><div class="lhead"><span>' + esc(L.name) + '</span><span class="faint">(' + L.items.length + ')</span></div>' +
        '<div class="lsub">' + esc(L.sub) + '</div>' +
        L.items.map(function (it) { return '<div class="neuron"><i></i>' + esc(it) + '</div>'; }).join('') + '</div>' +
        (i < all.length - 1 ? '<div class="edge" aria-hidden="true"><span>W' + (i + 1) + '</span>' + ic('move-right') + '</div>' : '');
    }).join('');
  }

  /* ================================================================
     EXPERIENCE
     ================================================================ */
  function renderExperience() {
    var allSlugs = {};
    EXP.forEach(function (e) { techSlugs(e).forEach(function (s) { allSlugs[s] = true; }); });
    function count(s) { return EXP.filter(function (e) { return techSlugs(e).indexOf(s) >= 0; }).length; }

    var cats = (P.techCategories || []).map(function (c) {
      return { name: c.name, color: c.color, items: c.items.filter(function (s) { return allSlugs[s]; }) };
    }).filter(function (c) { return c.items.length; });
    var categorized = {};
    cats.forEach(function (c) { c.items.forEach(function (s) { categorized[s] = true; }); });
    var others = Object.keys(allSlugs).filter(function (s) { return !categorized[s]; }).sort();
    if (others.length) cats.push({ name: 'other', color: 'dim', items: others });
    cats.forEach(function (c) { c.items.sort(function (a, b) { return count(b) - count(a); }); });

    /* legend */
    var leg = $('#branches');
    if (leg) {
      var years = [];
      EXP.forEach(function (e) { years.push(+year(e.start)); years.push(+year(e.end)); });
      leg.innerHTML = '<span class="lbl">tracks:</span>' +
        Object.keys(BRANCH).map(function (b) { return '<span class="bitem ' + cls(BRANCH[b]) + '"><i></i>' + b + '</span>'; }).join('') +
        '<span class="range">│&nbsp;&nbsp;' + Math.min.apply(null, years) + ' → ' + Math.max.apply(null, years) + '&nbsp;&nbsp;│&nbsp;&nbsp;' + esc(leg.getAttribute('data-note') || '') + '</span>';
    }

    /* state */
    var state = { terms: [], match: 'any', type: 'all', sort: 'newest' };
    var input = $('#tech-input');
    var q0 = new URLSearchParams(location.search).get('tech');
    if (q0 && input) input.value = q0;

    function parseInput() {
      var seen = {};
      state.terms = input.value.split(',').map(function (t) { return slug(t); }).filter(function (t) {
        if (!t || seen[t]) return false; seen[t] = true; return true;
      });
    }
    function setInput() { input.value = state.terms.join(','); }
    function termHits(slugs, t) {
      if (slugs.indexOf(t) >= 0) return true;
      if (allSlugs[t]) return false;                       /* exact slug typed: no fuzzy */
      return slugs.some(function (s) { return s.indexOf(t) >= 0; });
    }
    function matched(e) {
      if (!state.terms.length) return { any: false, ok: true, hits: [] };
      var ss = techSlugs(e);
      var hits = state.terms.filter(function (t) { return termHits(ss, t); });
      var ok = state.match === 'all' ? hits.length === state.terms.length : hits.length > 0;
      return { any: true, ok: ok, hits: hits };
    }

    function renderFacets() {
      var el = $('#facets'); if (!el) return;
      el.innerHTML = cats.map(function (c) {
        return '<div class="facet ' + cls(c.color) + '"><div class="flabel"><i></i>' + esc(c.name) + '</div><div class="fchips">' +
          c.items.map(function (s) {
            var on = state.terms.indexOf(s) >= 0;
            return '<button type="button" class="fchip' + (on ? ' is-on' : '') + '" data-tech="' + esc(s) + '" aria-pressed="' + on + '">' +
              (on ? ic('check') : '') + '<span>' + esc(s) + '</span><span class="n">' + count(s) + '</span></button>';
          }).join('') + '</div></div>';
      }).join('');
    }

    var OPTS = [['match', ['any', 'all']], ['type', ['all', 'jobs', 'research']], ['sort', ['newest', 'oldest']]];
    function renderOpts() {
      var el = $('#opts'); if (!el) return;
      el.innerHTML = OPTS.map(function (o) {
        return '<div class="opt"><span class="k">--' + o[0] + '</span>' + o[1].map(function (v) {
          return '<button type="button" class="radio' + (state[o[0]] === v ? ' is-on' : '') + '" data-opt="' + o[0] + '" data-val="' + v + '" aria-pressed="' + (state[o[0]] === v) + '"><i></i>' + v + '</button>';
        }).join('') + '</div>';
      }).join('') + '<span class="tip">tip: combine filters, e.g. --tech=python,kubernetes --match=all</span>';
    }

    var headId = newestMainId();
    var items = EXP.map(function (e) { return { kind: 'exp', start: e.start, e: e }; })
      .concat(EDU.filter(function (d) { return d.graduated && d.tag; }).map(function (d) { return { kind: 'tag', start: d.graduated, d: d }; }));

    function tagHtml(d) {
      return '<div class="ttag c-pink"><div class="graph"><i class="node"></i></div><div class="tbody">' +
        '<span class="tpill">' + ic('tag') + 'milestone ' + esc(d.tag) + '</span>' +
        '<span class="deg">🎓 ' + esc(d.degree) + '</span>' +
        '<span class="school">— ' + esc(d.school) + ' · ' + esc(String(d.place || '').split(',')[0]) + ' · ' + d.years[0] + ' — ' + d.years[1] + '</span>' +
      '</div></div>';
    }
    function commitHtml(e, m) {
      var c = BRANCH[e.branch] || 'green';
      var dim = m.any && !m.ok, hit = m.any && m.ok, isHead = e.id === headId;
      var stack = e.stack || e.tech || [];
      return '<article class="titem ' + cls(c) + (dim ? ' is-dim' : '') + (hit ? ' is-hit' : '') + (isHead ? ' is-head' : '') + '" id="x-' + esc(e.id) + '">' +
        '<div class="graph"><i class="node"></i></div>' +
        '<div class="meta"><div class="date">' + fmtMonth(e.start) + ' — ' + fmtMonth(e.end) + '</div><div class="loc">' + esc(e.location) + '</div></div>' +
        '<div class="card">' +
          '<div class="top"><span class="hash">#' + esc(e.hash) + '</span><span class="pill">' + esc(isHead ? headLabel(e) : e.branch) + '</span>' +
            (hit ? '<span class="match">' + ic('check') + 'matches --tech=' + esc(m.hits.join(',')) + '</span>' : '') + '</div>' +
          '<div class="body">' +
            '<div class="title"><h3>' + esc(e.company) + '</h3><span class="role">' + esc(e.role) + '</span></div>' +
            '<p>' + esc(e.desc) + '</p>' +
            (stack.length ? '<div class="diff"><span class="lbl">stack used</span><div class="adds">' + stack.map(function (s) {
              var sl = slug(s);
              var h = hit && m.hits.some(function (t) { return sl === t || sl.indexOf(t) >= 0 || t.indexOf(sl) >= 0; });
              return '<span class="add' + (h ? ' is-hit' : '') + '">+ ' + esc(s) + '</span>';
            }).join('') + '</div></div>' : '') +
          '</div>' +
        '</div>' +
      '</article>';
    }

    function renderTimeline() {
      var el = $('#timeline-items'); if (!el) return;
      var sorted = items.slice().sort(function (a, b) {
        return state.sort === 'newest' ? b.start.localeCompare(a.start) : a.start.localeCompare(b.start);
      });
      var shown = 0, hits = 0;
      el.innerHTML = sorted.map(function (it) {
        if (it.kind === 'tag') return tagHtml(it.d);
        var e = it.e;
        if (state.type === 'jobs' && e.branch === 'research') return '';
        if (state.type === 'research' && e.branch !== 'research') return '';
        shown++;
        var m = matched(e); if (m.any && m.ok) hits++;
        return commitHtml(e, m);
      }).join('');
      var rt = $('#result-text'), r = $('#result');
      if (rt) rt.textContent = state.terms.length ? hits + ' / ' + shown + ' roles match' : shown + ' roles';
      if (r) r.classList.toggle('is-quiet', !state.terms.length);
    }

    function update() { renderFacets(); renderTimeline(); refreshIcons(); }

    var facets = $('#facets');
    if (facets) facets.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-tech]'); if (!b) return;
      var s = b.getAttribute('data-tech'), i = state.terms.indexOf(s);
      if (i >= 0) state.terms.splice(i, 1); else state.terms.push(s);
      setInput(); update();
    });
    if (input) input.addEventListener('input', function () { parseInput(); update(); });
    var qwrap = $('#qinput');
    if (qwrap && input) qwrap.addEventListener('click', function () { input.focus(); });
    var clear = $('#clear');
    if (clear) clear.addEventListener('click', function () { state.terms = []; if (input) input.value = ''; update(); if (input) input.focus(); });
    var opts = $('#opts');
    if (opts) opts.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-opt]'); if (!b) return;
      state[b.getAttribute('data-opt')] = b.getAttribute('data-val');
      renderOpts(); renderTimeline(); refreshIcons();
    });

    if (input) parseInput();
    renderOpts(); update();
  }

  /* ================================================================
     PROJECTS
     ================================================================ */
  function renderProjects() {
    var state = { sel: { kind: 'all' }, q: '' };
    var total = PRJ.length;
    function dirCount(path) { return PRJ.filter(function (p) { return p.dir === path; }).length; }
    function prefixCount(pre) { return PRJ.filter(function (p) { return p.dir.indexOf(pre) === 0; }).length; }

    var tops = [];
    DIRS.forEach(function (d) {
      var parts = d.path.split('/'), name = parts[0];
      var t = tops.filter(function (x) { return x.name === name; })[0];
      if (!t) { t = { name: name, children: [] }; tops.push(t); }
      if (parts.length > 1) t.children.push(d); else t.self = d;
    });

    var ec = $('#explorer-count'); if (ec) ec.textContent = total + ' projects';
    var remote = $('#remote'); if (remote) { remote.textContent = P.githubLabel || P.github; remote.setAttribute('href', P.github); }

    function treeHtml() {
      function on(prefix) { return state.sel.kind === 'path' && state.sel.prefix === prefix; }
      var h = '<div class="tnode d0' + (state.sel.kind === 'all' ? ' is-on' : '') + '" data-path="" role="button" tabindex="0">' + ic('chevron-down') + '<span>projects/</span><span class="n">' + total + '</span></div>';
      tops.forEach(function (t) {
        if (t.self) {
          h += '<div class="tnode d1 ' + cls(t.self.color) + (on(t.self.path) ? ' is-on' : '') + '" data-path="' + esc(t.self.path) + '" role="button" tabindex="0">' + ic('folder', 'fc') + '<span>' + esc(t.name) + '/</span><span class="n">' + dirCount(t.self.path) + '</span></div>';
        } else {
          h += '<div class="tnode d1' + (on(t.name + '/') ? ' is-on' : '') + '" data-path="' + esc(t.name) + '/" role="button" tabindex="0">' + ic('chevron-down') + '<span>' + esc(t.name) + '/</span><span class="n">' + prefixCount(t.name + '/') + '</span></div>';
          t.children.forEach(function (d) {
            h += '<div class="tnode d2 ' + cls(d.color) + (on(d.path) ? ' is-on' : '') + '" data-path="' + esc(d.path) + '" role="button" tabindex="0">' + ic('folder', 'fc') + '<span>' + esc(d.path.split('/')[1]) + '/</span><span class="n">' + dirCount(d.path) + '</span></div>';
          });
        }
      });
      return h;
    }

    function dirVisible(path) {
      var s = state.sel;
      if (s.kind === 'all') return true;
      if (s.kind === 'path') return path === s.prefix || path.indexOf(s.prefix) === 0;
      var f = FILTERS.filter(function (x) { return x.key === s.key; })[0];
      return !f || !f.match || f.match.some(function (m) { return path === m || path.indexOf(m) === 0; });
    }
    function hit(p) {
      var q = state.q.trim().toLowerCase();
      var st = p.study || {};
      var extra = [st.pitch, st.solves].concat(st.architecture || [], st.stack || [],
        (st.challenges || []).map(function (c) { return c.q + ' ' + c.a; }));
      return !q || [p.title, p.desc, p.tag, p.file, p.lang, p.dir].concat(extra).join(' ').toLowerCase().indexOf(q) >= 0;
    }
    function cardHtml(p) {
      var tag = p.url ? 'a' : 'div';
      var attrs = p.url ? ' href="' + esc(p.url) + '" target="_blank" rel="noopener"' : '';
      return '<' + tag + ' class="card' + (p.url ? ' is-link' : '') + '"' + attrs + '>' +
        '<div class="ctab"><span class="file"><i class="dot"></i>' + esc(p.file) + '</span><span class="lang">' + esc(p.lang) + '</span></div>' +
        '<div class="cbody"><h3>' + esc(p.title) + '</h3><p>' + esc(p.desc) + '</p>' +
          '<div class="cfoot"><span class="tag">' + esc(p.tag) + '</span><span class="meta">' + esc(p.year) + (p.url ? ic('arrow-up-right') : '') + '</span></div></div>' +
      '</' + tag + '>';
    }
    function studyHtml(p) {
      var st = p.study;
      var link = p.url
        ? '<a class="open" href="' + esc(p.url) + '" target="_blank" rel="noopener">open repo ' + ic('arrow-up-right') + '</a>'
        : '<span class="priv">' + ic('lock') + (p.repo === 'private' ? 'private repo · walkthrough on request' : '') + '</span>';
      return '<article class="study" id="p-' + esc(p.id) + '">' +
        '<div class="ctab"><span class="file"><i class="dot"></i>' + esc(p.file) + 'README.md</span><span class="lang">' + esc(p.lang) + '</span></div>' +
        '<div class="sbody">' +
          '<div class="shd"><h3>' + esc(p.title) + '</h3><span class="tag">' + esc(p.tag) + '</span><span class="meta">' + esc(p.year) + '</span>' + link + '</div>' +
          '<p class="pitch">' + esc(st.pitch || p.desc) + '</p>' +
          '<div class="ssum">' + [['problem', st.solves], ['who uses it', st.users], ['what I built', st.built], ['status', st.status]].map(function (r) {
            return r[1] ? '<div class="srw"><span class="k">' + esc(r[0]) + '</span><span class="v">' + esc(r[1]) + '</span></div>' : '';
          }).join('') + '</div>' +
          '<button type="button" class="sexpand" aria-expanded="false" aria-controls="d-' + esc(p.id) + '">' +
            '<span class="g">$ </span><span class="more">read --full</span><span class="less">read --less</span>' + ic('chevron-down') + '</button>' +
          '<div class="sdetail" id="d-' + esc(p.id) + '">' +
          '<div class="sgrid">' +
            '<div class="scol"><section><div class="sh">## stack</div><div class="chips">' + (st.stack || []).map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div></section></div>' +
            '<section><div class="sh">## architecture</div><ul>' + (st.architecture || []).map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul></section>' +
          '</div>' +
          '<section><div class="sh">## challenges → how I solved them</div><div class="chals">' + (st.challenges || []).map(function (c) {
            return '<div class="chal"><div class="q"><span class="faint">- [x] </span>' + esc(c.q) + '</div><div class="a"><span class="g">→ </span>' + esc(c.a) + '</div></div>';
          }).join('') + '</div></section>' +
          '<div class="sfoot">' +
            '<div class="kvs">' + (st.results || []).map(function (r) {
              return '<span class="kv"><span class="faint">&gt;&gt;&gt; </span><span class="cy">' + esc(r[0]) + '</span><span class="faint"> = </span><span class="am b">' + esc(r[1]) + '</span></span>';
            }).join('') + '</div>' +
          '</div>' +
          '</div>' +
        '</div>' +
      '</article>';
    }
    function dirsHtml() {
      var any = false;
      var h = DIRS.map(function (d) {
        if (!dirVisible(d.path)) return '';
        var ps = PRJ.filter(function (p) { return p.dir === d.path && hit(p); });
        if (!ps.length) return '';
        any = true;
        var studies = ps.filter(function (p) { return p.study; }), plain = ps.filter(function (p) { return !p.study; });
        return '<section class="dir ' + cls(d.color) + '" id="dir-' + d.path.replace(/\//g, '-') + '">' +
          '<div class="dhead">' + ic('folder-open') + '<span class="path">./' + esc(d.path) + '/</span><span class="n">(' + ps.length + ')</span></div>' +
          (d.note ? '<div class="dnote">// ' + esc(d.note) + '</div>' : '') +
          (studies.length ? '<div class="studies">' + studies.map(studyHtml).join('') + '</div>' : '') +
          (plain.length ? '<div class="prow">' + plain.map(cardHtml).join('') + '</div>' : '') + '</section>';
      }).join('');
      return any ? h :
        '<div class="empty"><span class="g">$ </span>search "' + esc(state.q) + '" ./projects<br>' +
        '<span class="dim">no matches — try another keyword or <button type="button" class="linkbtn" id="reset-prj">clear filters</button></span></div>';
    }
    function chipsHtml() {
      return FILTERS.map(function (f) {
        var on = (f.key === 'all' && state.sel.kind === 'all') || (state.sel.kind === 'chip' && state.sel.key === f.key);
        return '<button type="button" class="pchip' + (on ? ' is-on' : '') + '" data-filter="' + esc(f.key) + '" aria-pressed="' + on + '">' + esc(f.label) + '</button>';
      }).join('');
    }
    function update() {
      var a = $('#pchips'), b = $('#tree'), c = $('#dirs');
      if (a) a.innerHTML = chipsHtml();
      if (b) b.innerHTML = treeHtml();
      if (c) c.innerHTML = dirsHtml();
      refreshIcons();
    }

    var pch = $('#pchips');
    if (pch) pch.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-filter]'); if (!b) return;
      var k = b.getAttribute('data-filter');
      state.sel = k === 'all' ? { kind: 'all' } : { kind: 'chip', key: k };
      update();
    });
    var tree = $('#tree');
    function treePick(ev) {
      var n = ev.target.closest('[data-path]'); if (!n) return;
      if (ev.type === 'keydown' && ev.key !== 'Enter' && ev.key !== ' ') return;
      ev.preventDefault();
      var p = n.getAttribute('data-path');
      state.sel = p ? { kind: 'path', prefix: p } : { kind: 'all' };
      update();
    }
    if (tree) { tree.addEventListener('click', treePick); tree.addEventListener('keydown', treePick); }
    var qi = $('#prj-q'), sw = $('#prj-search');
    if (qi) qi.addEventListener('input', function () { state.q = qi.value; if (sw) sw.classList.toggle('has-text', !!qi.value); update(); });
    if (sw && qi) sw.addEventListener('click', function () { qi.focus(); });
    var dirs = $('#dirs');
    if (dirs) dirs.addEventListener('click', function (ev) {
      var tg = ev.target.closest('.sexpand');
      if (tg) {
        var art = tg.closest('.study'), open = !art.classList.contains('is-open');
        art.classList.toggle('is-open', open); tg.setAttribute('aria-expanded', String(open));
        if (!open) art.scrollIntoView({ block: 'start' });
        return;
      }
      if (!ev.target.closest('#reset-prj')) return;
      state.sel = { kind: 'all' }; state.q = ''; if (qi) qi.value = ''; if (sw) sw.classList.remove('has-text'); update();
    });
    function openHashStudy() {
      var h = location.hash.replace(/^#/, ''), art = h ? document.getElementById(h) : null;
      if (art && art.classList.contains('study')) {
        art.classList.add('is-open');
        var b = art.querySelector('.sexpand'); if (b) b.setAttribute('aria-expanded', 'true');
        art.scrollIntoView({ block: 'start' });
      }
    }
    window.addEventListener('hashchange', openHashStudy);
    var qp = new URLSearchParams(location.search).get('q');
    if (qp && qi) { qi.value = qp; state.q = qp; if (sw) sw.classList.add('has-text'); }
    update();
    openHashStudy();
  }

  /* ================================================================
     ABOUT
     ================================================================ */
  function renderAbout() {
    var A = P.about || {};
    var L = A.lines || [];
    var ed = $('#editor');
    if (ed) {
      var bytes = 0;
      try { bytes = new TextEncoder().encode(L.map(function (l) { return l.text || ''; }).join('\n')).length; } catch (e) { bytes = L.join('\n').length; }
      ed.innerHTML = termBar(A.editorTitle || 'about.md — vim', esc(A.editorMeta || '')) +
        '<div class="term-body editor">' + L.map(function (l, i) {
          var last = i === L.length - 1;
          return '<div class="el"><span class="ln' + (last ? ' cur' : '') + '">' + (i + 1) + '</span>' +
            '<span class="' + esc(l.kind || 'p') + '">' + esc(l.text || ' ') + (l.cursor ? '<i class="cursor" aria-hidden="true"></i>' : '') + '</span></div>';
        }).join('') +
        '<div class="efoot2"><span>:wq</span><span>' + L.length + 'L, ' + bytes + 'B written</span></div></div>';
    }

    var N = A.neofetch || {};
    var nf = $('#neofetch');
    if (nf) nf.innerHTML =
      '<div class="cmd">$ quick_facts</div>' +
      '<div class="nf"><div class="logo"><span class="big">' + esc(N.logo) + '</span><span class="ver">' + esc(N.version) + '</span></div>' +
        '<div class="info"><div class="uh"><span class="g">' + esc(P.user) + '</span><span class="faint">@</span><span class="cy">' + esc(P.host) + '</span></div>' +
          '<div class="rule">─────────────────</div>' +
          (N.rows || []).map(function (r) { return '<div class="nrow"><span class="k">' + esc(r[0]) + ':</span><span>' + esc(r[1]) + '</span></div>'; }).join('') +
          '<div class="palette">' + (N.palette || []).map(function (c) { return '<i style="background:' + esc(c) + '"></i>'; }).join('') + '</div>' +
        '</div></div>';

    var SK = P.skills || {};
    var sk = $('#skills');
    if (sk) sk.innerHTML = (SK.groups || []).map(function (g) {
      return '<div class="term skillwin ' + cls(g.color) + '">' + termBar(g.title, '<span>' + g.items.length + ' items</span>') +
        '<div class="term-body">' +
          '<div class="pyline"><span class="faint"># </span>' + esc(g.note) + '</div>' +
          '<div class="chips">' + g.items.map(function (it) { return '<span class="chip">' + esc(it) + '</span>'; }).join('') + '</div>' +
        '</div></div>';
    }).join('');

    var yl = [];
    EDU.forEach(function (d, i) {
      if (i) yl.push('');
      yl.push('<span class="faint">- </span><span class="k">degree</span><span class="p">: </span><span class="s">' + esc(d.degree) + '</span>');
      yl.push('  <span class="k">school</span><span class="p">: </span><span class="tx b">' + esc(d.school) + '</span>' + (d.place ? '<span class="faint">   # ' + esc(d.place) + '</span>' : ''));
      yl.push('  <span class="k">years</span><span class="p">: </span><span class="n">' + d.years[0] + '..' + d.years[1] + '</span>');
      if (d.focus) yl.push('  <span class="k">focus</span><span class="p">: [</span><span class="g">' + esc(d.focus.join(', ')) + '</span><span class="p">]</span>');
    });
    var ya = $('#yaml');
    if (ya) ya.innerHTML = termBar('education.yaml', 'YAML') + '<div class="term-body code">' +
      yl.map(function (l, i) { return '<div class="cl"><span class="ln">' + pad(i + 1, 2) + '</span>' + l + '</div>'; }).join('') + '</div>';

    var ecards = $('#edu-cards');
    if (ecards) ecards.innerHTML = EDU.filter(function (d) { return d.card; }).map(function (d) {
      return '<div class="ecard ' + cls(d.color) + '"><div class="kicker">' + esc(d.card.kicker) + '</div><div class="big">' + esc(d.card.big) + '</div><p>' + esc(d.card.text) + '</p></div>';
    }).join('');
    var el = $('#edu-link');
    if (el) {
      var countries = {};
      EDU.forEach(function (d) { var c = String(d.place || '').split(',')[1]; if (c) countries[c.trim()] = true; });
      el.textContent = EDU.filter(function (d) { return d.card; }).length + ' degrees · ' + Object.keys(countries).length + ' countries';
    }
  }

  /* ================================================================
     boot
     ================================================================ */
  renderNav();
  renderFooter();
  ({ home: renderHome, experience: renderExperience, projects: renderProjects, about: renderAbout }[page] || function () {})();
  refreshIcons();

  /* reveal sections as they scroll in */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (n) { io.observe(n); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('is-in'); });
  }
})();

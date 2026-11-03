# chrissbill23.github.io — V2

Personal website of Christian Bile, live at <https://chrissbill23.github.io>.
Static HTML/CSS/JS, no build step — push to `master` and GitHub Pages serves it.

## Pages

| file              | nav tab          | content                                              |
|-------------------|------------------|------------------------------------------------------|
| `index.html`      | `home.sh`        | hero, metrics, featured experience/projects, stack   |
| `experience.html` | `experience.log` | career timeline with a tech filter console           |
| `projects.html`   | `projects/`      | explorer + project cards, category chips, search box |
| `about.html`      | `about.md`       | bio editor, neofetch, skills, education              |

`works.html`, `education.html` and `contact.html` are redirects kept for old links.

## Where the data lives

All content is plain JavaScript objects — edit these, nothing else:

- `js/data/profile.js` — identity, hero copy, metrics, skills, contact, about, stack layers, filter facets
- `js/data/works.js` — `SITE.experience` (jobs/internships) and `SITE.projects` (+ `SITE.projectDirs`)
- `js/data/education.js` — degrees (also drive the `milestone vX.0.0` markers in the timeline)

`js/dataloader.js` renders every page from that data; `js/fx.js` is the WebGL
neural-field background of the home hero; `css/v2.css` holds the theme.

Design source: `chrissbill23.pen` (Pencil).

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

/* ------------------------------------------------------------------
   education.js — degrees (SITE.education).

   graduated  "YYYY-MM": where the "tag: vX.0.0" release marker sits
              in the experience timeline (omit to hide it there)
   card       the side card on about.md (omit for none)
   ------------------------------------------------------------------ */
window.SITE = window.SITE || {};

SITE.education = [
  {
    degree: "MScT Artificial Intelligence & Advanced Visual Computing",
    school: "École Polytechnique", place: "Paris, FR",
    years: [2019, 2021], graduated: "2021-09", tag: "v2.0.0", color: "violet",
    focus: ["machine-learning", "deep-learning", "reinforcement-learning", "computer-vision", "3d-graphics"],
    card: {
      kicker: "MASTER'S · RESEARCH TRACK",
      big: "X · AI+VC",
      text: "Two-year programme taught in English at École Polytechnique — the AI branch (machine, deep and reinforcement learning) plus the Visual Computing branch."
    }
  },
  {
    degree: "BSc Computer Science",
    school: "Università degli Studi di Padova", place: "Padova, IT",
    years: [2014, 2017], graduated: "2017-09", tag: "v1.0.0", color: "cyan",
    focus: ["c++", "java", "algorithms", "databases", "networks", "it-security"],
    card: {
      kicker: "BACHELOR'S · 3 YEARS",
      big: "UniPD · CS",
      text: "Theoretical, methodological and applied foundations of computer science on a solid maths base."
    }
  },
  {
    degree: "High School Diploma — Economics & Finance",
    school: "ITE Riccati-Luzzatti", place: "Treviso, IT",
    years: [2010, 2013],
    focus: ["business-management", "finance", "law"]
  }
];

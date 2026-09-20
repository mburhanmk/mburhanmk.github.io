/**
 * SITE CONTENT — edit this block for text/links; the code below it renders it.
 * - Add/remove items by copying/deleting {...} blocks.
 * - An empty items/categories array hides that section automatically.
 * - hero.statement `value` and achievements `stat` count up on scroll
 *   (e.g. "1,000+"). Achievements with no `stat` show 01, 02, 03… instead.
 * - An experience item's optional `url` turns the company name into a link.
 */
const SITE = {
  meta: { name: "Muhammed Burhan M K", navName: "Burhan M K", role: "Finance & Operations Analyst" },

  nav: {
    connectLabel: "Let's connect ↗",
  },

  hero: {
    kicker: "Finance · Operations · Data",
    headline: "Turning financial data into decisions.",
    tagline:
      "Finance and Operations Analyst with 2+ years of experience turning financial data, KPI reporting and operational workflows into reliable business decisions.",
    location: "Bengaluru, India",
    links: [
      { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/burhan-m-k/" },
      { label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/qr/ZNJH4PCW3SCQE1" },
    ],
    statementTitle: "Impact snapshot",
    statement: [
      { label: "Funding & Investment Transactions Reviewed", value: "1,000+" },
      { label: "Recurring KPI / MIS Reporting Automated", value: "90%" },
      { label: "Institutional Client Accounts Supported", value: "400+" },
      { label: "Enterprise c\Clients Onboarded", value: "100+" },
    ],
  },

  about: {
    heading: "About me",
    paragraphs: [
      "I work where finance, data, and operations collide — where messy information has to become something accurate, structured, and usable by someone under time pressure.",
      "At PrivateCircle, that means living inside high-volume investment and transaction data. I've reviewed 1,000+ investment transactions, worked across 400+ client accounts, and automated 90% of recurring KPI/MIS reporting — work that used to eat hours every week and now runs quietly in the background. I build the financial models and forecasts behind that data, and I've taken 100+ enterprise clients across VC, PE, and Corporate segments from raw setup to a fully working platform.",
      "But the numbers are only half the job. What actually pulls me in is the inefficiency hiding inside a process — the report that shouldn't still be manual, the data gap that needs catching before a client ever sees it, the model that turns a chaotic business into something you can reason about on one page. It's unglamorous work, but it's the reason people trust the number in front of them.",
      "My approach stays simple: question the data, fix the process, make the outcome easy to act on.",
    ],
    facts: ["Financial Analysis", "Private Markets", "MIS & KPI Reporting", "Excel Automation", "Client Operations", "Process Automation"],
  },

  experience: {
    heading: "Experience",
    sub: "Building reliable reporting, operational workflows and data-driven outcomes.",
    items: [
      {
        role: "Junior Financial Analyst",
        company: "PrivateCircle",
        url: "https://privatecircle.co/",
        location: "Bengaluru, India",
        period: "Dec 2023 — Present",
        bullets: [
          "Reviewed and verified 1,000+ funding and investment transactions across Indian markets for accuracy and analysis.",
          "Analysed KPI and performance data across 400+ client accounts, delivering weekly reports that reduced escalations, forwarded potential upgrades, and lifted retention.",
          "Built forecasting and projection Excel models for client stats, plus reusable templates for internal reporting, scaling output without added headcount.",
          "Automated 90% of daily, weekly, and monthly KPI/MIS reporting using advanced Excel macros, eliminating hours of manual work per cycle.",
          "Onboarded 100+ enterprise clients across VC, PE, and Corporate segments end-to-end, from package setup through go-live and product support.",
          "Led UAT across 10+ platform releases, identifying 30+ pre-launch defects and preserving data integrity for 400+ institutional users.",
          "Partnered with Product, Sales, and Operations teams to improve reporting accuracy and streamline process workflows.",
        ],
      },
      {
        role: "Intern",
        company: "India Invest Inc",
        url: "https://indiainvestinc.com/",
        location: "Kozhikode, India",
        period: "Mar 2022 — Apr 2022",
        bullets: ["Supported investment research and market data analysis, gaining early exposure to capital markets operations."],
      },
    ],
  },

  skills: {
    heading: "Core capabilities",
    sub: "A practical toolkit spanning finance, data, reporting and operations.",
    categories: [
      { title: "Financial Analysis", items: ["Financial Statement Analysis", "Ratio & Variance Analysis", "Financial Modeling", "Transaction Analysis & Review", "Equity & Capital Markets Research", "KPI Monitoring", "Forensic Accounting"] },
      { title: "Data & Reporting", items: ["Advanced Excel", "Pivot Tables", "XLOOKUP", "INDEX-MATCH", "Excel Macros", "Google Sheets", "SQL — Basic", "MIS Reporting", "Data Visualisation", "Data Cleaning & Validation", "AI Tools"] },
      { title: "Process & Operations", items: ["Process Improvement & Automation", "UAT & Quality Assurance", "Client Onboarding", "Stakeholder Management", "Cross-Functional Collaboration"] },
    ],
  },

  achievements: {
    heading: "Selected highlights",
    sub: "Work and outcomes that best represent my approach.",
    items: [
      { label: "Reporting automation", desc: "Automated 90% of recurring daily, weekly and monthly KPI/MIS reporting using advanced Excel macros, reducing repetitive manual work and improving reporting reliability." },
      { label: "Transaction intelligence", desc: "Reviewed and verified 1,000+ funding and investment transactions across Indian markets for accuracy and analysis." },
      { label: "Enterprise onboarding", desc: "Onboarded 100+ enterprise clients across VC, PE and Corporate segments, covering financial data setup, go-live and training." },
      { label: "Platform quality", desc: "Led UAT across 10+ platform releases, identifying 30+ pre-launch defects and helping preserve data integrity for 400+ institutional users." },
      { label: "Equity analysis", desc: "Academic project covering financial statement and ratio analysis of listed NIFTY Metal companies, assessing profitability, liquidity, solvency and valuation." },
    ],
  },

  education: {
    heading: "Education & credentials",
    title: "Education",
    items: [
      { degree: "Master of Commerce (M.Com) — Accounting & Taxation", school: "Pondicherry University", period: "Sep 2021 — May 2023" },
      { degree: "Bachelor of Commerce (B.Com) — Islamic Finance", school: "University of Calicut", period: "Jul 2018 — Apr 2021" },
    ],
  },

  certifications: {
    title: "Certifications",
    items: ["Capital Markets & Technical Analysis — NSE", "Business Correspondent & Facilitator", "Diploma in Computer Application"],
  },

  contact: {
    heading: "Let's talk about what's next.",
    text: "Have a role, project or opportunity where financial analysis, operational discipline and data can create leverage? I'd be glad to hear from you.",
    links: [
      { label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/qr/ZNJH4PCW3SCQE1" },
      { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/burhan-m-k/" },
    ],
    email: "burhanmk28@gmail.com", // where the contact form's mailto: goes
  },

  footer: { tagline: "Finance · Operations · Data" },
};

/**
 * Renders SITE (defined above) into the page. Edit the SITE object above, not this code,
 * unless you're changing behavior rather than content.
 */
(function () {
  "use strict";

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  const ICONS = {
    linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  };

  // Outline button with the brand logo + label, opens in a new tab.
  function linkButton(l) {
    const a = el("a", "btn");
    if (ICONS[l.icon]) {
      a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + ICONS[l.icon] + '"/></svg>';
    }
    a.appendChild(el("span", null, l.label));
    a.href = l.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function setText(id, text) {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
  }

  // ------------------------------------------------------------------
  // NAV — only lists sections that actually have content
  // ------------------------------------------------------------------
  const NAV_SECTIONS = [
    { id: "about", label: "About", hasContent: () => SITE.about.paragraphs.length > 0 },
    { id: "experience", label: "Experience", hasContent: () => SITE.experience.items.length > 0 },
    { id: "skills", label: "Skills", hasContent: () => SITE.skills.categories.length > 0 },
    { id: "achievements", label: "Highlights", hasContent: () => SITE.achievements.items.length > 0 },
    { id: "education", label: "Education", hasContent: () => SITE.education.items.length > 0 || SITE.certifications.items.length > 0 },
    { id: "contact", label: SITE.nav.connectLabel, hasContent: () => true },
  ];

  function toggleSection(id, visible) {
    const section = document.getElementById(id);
    if (section) section.style.display = visible ? "" : "none";
  }

  function buildNav() {
    const navEl = document.getElementById("nav-links");
    NAV_SECTIONS.forEach(({ id, label, hasContent }) => {
      const visible = hasContent();
      toggleSection(id, visible);
      if (!visible) return;
      const a = el("a", null, label);
      a.href = "#" + id;
      navEl.appendChild(a);
    });
  }

  // ------------------------------------------------------------------
  // HERO
  // ------------------------------------------------------------------
  function renderHero() {
    setText("nav-name", SITE.meta.navName);
    setText("footer-name", "© " + new Date().getFullYear() + " " + SITE.meta.name);
    setText("footer-tagline", SITE.footer.tagline);
    document.title = SITE.meta.name + " — " + SITE.meta.role;

    setText("hero-kicker", SITE.hero.kicker);
    setText("hero-headline", SITE.hero.headline);
    setText("hero-tagline", SITE.hero.tagline);
    setText("hero-location", SITE.hero.location);

    const actions = document.getElementById("hero-actions");
    SITE.hero.links.forEach((l) => {
      actions.appendChild(linkButton(l));
    });

    const statement = document.getElementById("hero-statement");
    if (SITE.hero.statementTitle) statement.appendChild(el("div", "statement__title", SITE.hero.statementTitle));
    SITE.hero.statement.forEach((row) => {
      const rowEl = el("div", "statement__row");
      rowEl.appendChild(el("span", "statement__label", row.label));
      rowEl.appendChild(el("span", "statement__leader"));
      const value = el("span", "statement__value", "0");
      value.dataset.target = row.value;
      rowEl.appendChild(value);
      statement.appendChild(rowEl);
    });
  }

  // ------------------------------------------------------------------
  // ABOUT
  // ------------------------------------------------------------------
  function renderAbout() {
    setText("about-heading", SITE.about.heading);
    const body = document.getElementById("about-body");
    SITE.about.paragraphs.forEach((p) => body.appendChild(el("p", null, p)));
    const facts = document.getElementById("about-facts");
    (SITE.about.facts || []).forEach((f) => facts.appendChild(el("span", "tag", f)));
  }

  // ------------------------------------------------------------------
  // EXPERIENCE
  // ------------------------------------------------------------------
  function renderExperience() {
    setText("experience-heading", SITE.experience.heading);
    const list = document.getElementById("experience-list");
    SITE.experience.items.forEach((job) => {
      const item = el("div", "timeline__item");

      const rail = el("div", "timeline__rail");
      rail.appendChild(el("div", "timeline__dot"));
      rail.appendChild(el("div", "timeline__period", job.period));
      item.appendChild(rail);

      const content = el("div");
      content.appendChild(el("h3", "timeline__role", job.role));
      const meta = el("p", "timeline__meta");
      // If the job has a `url`, the company name renders as a link.
      if (job.url) {
        const link = el("a", "timeline__link", job.company);
        link.href = job.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        meta.appendChild(link);
      } else {
        meta.appendChild(document.createTextNode(job.company));
      }
      meta.appendChild(document.createTextNode(" · " + job.location));
      content.appendChild(meta);

      const bullets = el("ul", "timeline__bullets");
      job.bullets.forEach((b) => bullets.appendChild(el("li", null, b)));
      content.appendChild(bullets);

      item.appendChild(content);
      list.appendChild(item);
    });
  }

  // ------------------------------------------------------------------
  // SKILLS
  // ------------------------------------------------------------------
  function renderSkills() {
    setText("skills-heading", SITE.skills.heading);
    const list = document.getElementById("skills-list");
    SITE.skills.categories.forEach((cat) => {
      const col = el("div", "skills-cat");
      col.appendChild(el("div", "skills-cat__title", cat.title));
      const tags = el("div", "skills-cat__tags");
      cat.items.forEach((item) => tags.appendChild(el("span", "tag", item)));
      col.appendChild(tags);
      list.appendChild(col);
    });
  }

  // ------------------------------------------------------------------
  // ACHIEVEMENTS
  // ------------------------------------------------------------------
  function renderAchievements() {
    setText("achievements-heading", SITE.achievements.heading);
    const list = document.getElementById("achievements-list");
    SITE.achievements.items.forEach((a, i) => {
      const card = el("div", "achievement-card");
      const stat = el("div", "achievement-card__stat", a.stat ? "0" : String(i + 1).padStart(2, "0"));
      if (a.stat) stat.dataset.target = a.stat;
      card.appendChild(stat);
      card.appendChild(el("div", "achievement-card__label", a.label));
      card.appendChild(el("p", "achievement-card__desc", a.desc));
      list.appendChild(card);
    });
  }

  // ------------------------------------------------------------------
  // EDUCATION & CERTIFICATIONS
  // ------------------------------------------------------------------
  function renderEducation() {
    setText("education-heading", SITE.education.heading);
    setText("education-title", SITE.education.title);
    setText("certifications-title", SITE.certifications.title);
    const list = document.getElementById("education-list");
    SITE.education.items.forEach((e) => {
      const item = el("div", "edu-item");
      item.appendChild(el("div", "edu-item__degree", e.degree));
      item.appendChild(el("div", "edu-item__meta", e.school + " · " + e.period));
      list.appendChild(item);
    });
    const certList = document.getElementById("certifications-list");
    SITE.certifications.items.forEach((c) => certList.appendChild(el("li", null, c)));
  }

  // ------------------------------------------------------------------
  // CONTACT
  // ------------------------------------------------------------------
  function renderContact() {
    setText("contact-heading", SITE.contact.heading);
    setText("contact-text", SITE.contact.text);
    const links = document.getElementById("contact-links");
    SITE.contact.links.forEach((l) => {
      links.appendChild(linkButton(l));
    });
    document.getElementById("contact-form").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const v = (id) => document.getElementById(id).value.trim();
      const body = "Sender email: " + v("sender-email") + "\n\n" + v("email-body");
      location.href = "mailto:burhanmk28@gmail.com" + SITE.contact.email + "?subject=" + encodeURIComponent(v("email-subject")) + "&body=" + encodeURIComponent(body);
    });
  }

  // ------------------------------------------------------------------
  // MOBILE NAV
  // ------------------------------------------------------------------
  function wireMobileNav() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ------------------------------------------------------------------
  // COUNT-UP — the one deliberate scroll-triggered moment.
  // Parses values like "1,000+", "90%", "2+", or leaves non-numeric
  // strings (e.g. "NIFTY Metal") untouched.
  // ------------------------------------------------------------------
  function animateCounters() {
    const targets = document.querySelectorAll("[data-target]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = (node) => {
      const raw = node.dataset.target;
      const match = raw.match(/[\d,]+/);
      if (!match || prefersReducedMotion) {
        node.textContent = raw;
        return;
      }
      const numeric = parseInt(match[0].replace(/,/g, ""), 10);
      const prefix = raw.slice(0, match.index);
      const suffix = raw.slice(match.index + match[0].length);
      const duration = 900;
      const start = performance.now();

      function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(numeric * eased);
        node.textContent = prefix + current.toLocaleString("en-IN") + suffix;
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    };

    if (!("IntersectionObserver" in window)) {
      targets.forEach(run);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    targets.forEach((t) => observer.observe(t));
  }

  // ------------------------------------------------------------------
  // INIT
  // ------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    buildNav();
    ["experience", "skills", "achievements"].forEach((k) => setText(k + "-sub", SITE[k].sub || ""));
    renderHero();
    renderAbout();
    renderExperience();
    renderSkills();
    renderAchievements();
    renderEducation();
    renderContact();
    wireMobileNav();
    animateCounters();
  });
})();

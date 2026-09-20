const portfolio = {
  tagline: "Finance and Operations Analyst with 2+ years of experience turning financial data, KPI reporting and operational workflows into reliable business decisions.",
  about: [
    "I work where finance, data, and operations collide — where messy information has to become something accurate, structured, and usable by someone under time pressure.",
    "At PrivateCircle, that means living inside high-volume investment and transaction data. I've reviewed 1,000+ investment transactions, worked across 400+ client accounts, and automated 90% of recurring KPI/MIS reporting — work that used to eat hours every week and now runs quietly in the background. I build the financial models and forecasts behind that data, and I've taken 100+ enterprise clients across VC, PE, and Corporate segments from raw setup to a fully working platform.",
    "But the numbers are only half the job. What actually pulls me in is the inefficiency hiding inside a process — the report that shouldn't still be manual, the data gap that needs catching before a client ever sees it, the model that turns a chaotic business into something you can reason about on one page. It's unglamorous work, but it's the reason people trust the number in front of them.",
    "My approach stays simple: question the data, fix the process, make the outcome easy to act on."
  ],
  metrics: [
    {value:"1,000+",label:"funding & investment transactions reviewed"},
    {value:"90%",label:"recurring KPI / MIS reporting automated"},
    {value:"400+",label:"institutional client accounts supported"},
    {value:"100+",label:"enterprise clients onboarded"}
  ],
  facts:["Financial Analysis","Private Markets","MIS & KPI Reporting","Excel Automation","Client Operations","UAT & QA"],
  experience:[
    {dates:"Dec 2023 — Present",role:"Junior Financial Analyst",company:"PrivateCircle", url:"https://privatecircle.co/",location:"Bengaluru, India",bullets:[
      "Reviewed and verified 1,000+ funding and investment transactions across Indian markets for accuracy and analysis.",
      "Analysed KPI and performance data across 400+ client accounts, delivering weekly reports that reduced escalations, forwarded potential upgrades, and lifted retention.",
      "Built forecasting and projection Excel models for client stats, plus reusable templates for internal reporting, scaling output without added headcount.",
      "Automated 90% of daily, weekly, and monthly KPI/MIS reporting using advanced Excel macros, eliminating hours of manual work per cycle.",
      "Onboarded 100+ enterprise clients across VC, PE, and Corporate segments end-to-end, from package setup through go-live and product support.",
      "Led UAT across 10+ platform releases, identifying 30+ pre-launch defects and preserving data integrity for 400+ institutional users.",
      "Partnered with Product, Sales, and Operations teams to improve reporting accuracy and streamline process workflows."
    ]},
    {dates:"Mar 2022 — Apr 2022",role:"Intern",company:"India Invest Inc",location:"Kozhikode, India",bullets:["Supported investment research and market data analysis, gaining early exposure to capital markets operations."]}
  ],
  skills:[
    {title:"Financial Analysis",tags:["Financial Statement Analysis","Ratio & Variance Analysis","Financial Modeling","Transaction Analysis & Review","Equity & Capital Markets Research","KPI Monitoring","Forensic Accounting"]},
    {title:"Data & Reporting",tags:["Advanced Excel","Pivot Tables","XLOOKUP","INDEX-MATCH","Excel Macros","Google Sheets","SQL — Basic","MIS Reporting","Data Visualisation","Data Cleaning & Validation"]},
    {title:"Process & Operations",tags:["Process Improvement & Automation","UAT & Quality Assurance","Client Onboarding","Stakeholder Management","Cross-Functional Collaboration"]}
  ],
  highlights:[
    {title:"Reporting automation",text:"Automated 90% of recurring daily, weekly and monthly KPI/MIS reporting using advanced Excel macros, reducing repetitive manual work and improving reporting reliability."},
    {title:"Transaction intelligence",text:"Reviewed and verified 1,000+ funding and investment transactions across Indian markets for accuracy and analysis."},
    {title:"Enterprise onboarding",text:"Onboarded 100+ enterprise clients across VC, PE and Corporate segments, covering financial data setup, go-live and training."},
    {title:"Platform quality",text:"Led UAT across 10+ platform releases, identifying 30+ pre-launch defects and helping preserve data integrity for 400+ institutional users."},
    {title:"Equity analysis",text:"Academic project covering financial statement and ratio analysis of listed NIFTY Metal companies, assessing profitability, liquidity, solvency and valuation."}
  ],
  education:[
    {degree:"Master of Commerce (M.Com) — Accounting & Taxation",school:"Pondicherry University",dates:"Sep 2021 — May 2023"},
    {degree:"Bachelor of Commerce (B.Com) — Islamic Finance",school:"University of Calicut",dates:"Jul 2018 — Apr 2021"}
  ],
  certifications:["Capital Markets & Technical Analysis — NSE","Business Correspondent & Facilitator","Diploma in Computer Application"]
};
const $=s=>document.querySelector(s);
$("#heroTagline").textContent=portfolio.tagline;
$("#aboutText").innerHTML=portfolio.about.map(p=>`<p>${p}</p>`).join("");
$("#year").textContent=new Date().getFullYear();
$("#metricList").innerHTML=portfolio.metrics.map(x=>`<div class="metric"><span class="metric-label">${x.label}</span><span class="metric-value">${x.value}</span></div>`).join("");
$("#aboutFacts").innerHTML=portfolio.facts.map(x=>`<span class="fact">${x}</span>`).join("");
$("#experienceList").innerHTML=portfolio.experience.map(x=>`<article class="timeline-item reveal"><div class="timeline-date">${x.dates}</div><div class="timeline-main"><h3>${x.role}</h3><div class="company">${x.url ? `<a href="${x.url}" target="_blank" rel="noopener noreferrer">${x.company}</a>` : x.company} · ${x.location}</div><ul>${x.bullets.map(b=>`<li>${b}</li>`).join("")}</ul></div></article>`).join("");
$("#skillsGrid").innerHTML=portfolio.skills.map(x=>`<article class="skill-card reveal"><h3>${x.title}</h3><div class="skill-tags">${x.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`).join("");
$("#highlightsGrid").innerHTML=portfolio.highlights.map((x,i)=>`<article class="highlight reveal"><span class="highlight-index">0${i+1}</span><h3>${x.title}</h3><p>${x.text}</p></article>`).join("");
$("#educationList").innerHTML=portfolio.education.map(x=>`<article class="edu-item reveal"><div class="edu-degree">${x.degree}</div><div class="edu-school">${x.school}</div><div class="edu-date">${x.dates}</div></article>`).join("");
$("#certificationList").innerHTML=portfolio.certifications.map(x=>`<div class="cert">${x}</div>`).join("");
const menuToggle=$("#menuToggle"),navLinks=$("#navLinks");
menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
const header=document.querySelector(".site-header"),progress=$("#progress");
function scrollUI(){header.classList.toggle("scrolled",scrollY>15);const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?(scrollY/max)*100:0}%`;}
addEventListener("scroll",scrollUI,{passive:true});scrollUI();
const observer=new IntersectionObserver((entries,obs)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
$("#contactForm").addEventListener("submit",e=>{e.preventDefault();const sender=$("#senderEmail").value.trim(),subject=$("#emailSubject").value.trim(),message=$("#emailBody").value.trim();const body=`Sender email: ${sender}\n\n${message}`;location.href=`mailto:burhanmk28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});

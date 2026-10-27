import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  Code2, Download, Github, Globe2, Layers3, Linkedin, Mail, MapPin,
  Menu, MessageCircle, MonitorSmartphone, Rocket, Sparkles, X
} from 'lucide-react';
import './styles.css';

const skills = [
  { title: 'Frontend engineering', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'] },
  { title: 'Architecture & state', items: ['Micro-frontends', 'Redux Toolkit', 'Context API', 'Custom Hooks', 'Reusable UI Libraries', 'Webpack', 'Vite'] },
  { title: 'Backend & integration', items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Axios', 'Fetch API', 'MongoDB'] },
  { title: 'Enterprise & AI tools', items: ['Palantir Foundry', 'Workshop', 'OSDK', 'Custom Widgets', 'GitHub Copilot', 'ChatGPT', 'Git / CI/CD'] },
];

const experience = [
  {
    period: 'JUN 2025 — MAR 2026', role: 'Expert Software Engineer', company: 'O&M Halyard Health India Pvt. Ltd.',
    points: [
      'Engineered 12+ mission-critical React and TypeScript healthcare modules, improving page-load speeds by 40%.',
      'Standardized modular frontend architecture across 3 engineering teams, reducing duplicate implementations by 30%.',
      'Integrated 20+ enterprise REST APIs and reduced network latency by 250ms.',
      'Integrated Palantir Foundry Workshop custom widgets for real-time analytics used by 5,000+ daily active users.',
      'Used AI-assisted coding, unit-test generation and debugging workflows to save 10+ developer hours weekly.'
    ]
  },
  {
    period: 'MAR 2021 — JUN 2025', role: 'Consultant — Siemens Healthineers (Varian)', company: 'IIT Jobs Inc.',
    points: [
      'Architected enterprise pricing portal applications using React, TypeScript and Salesforce LWC, supporting $50M+ annual transaction volume.',
      'Refactored legacy UI into a standardized design system, improving component reuse across 5 sub-projects by 45%.',
      'Optimized secure REST API integrations, reducing quote-generation time from 15 seconds to under 2 seconds.',
      'Partnered with global stakeholders and backend architects to move monolithic views into modular React applications.'
    ]
  },
  {
    period: 'AUG 2016 — FEB 2021', role: 'Senior UI Developer — Axis Bank Client', company: 'Tejora Technologies Pvt. Ltd. / Nelito India Pvt. Ltd.',
    points: [
      'Delivered high-availability banking platforms serving 100,000+ branch users with React and Angular.',
      'Built analytics dashboards processing 2M+ daily financial records with 99.9% uptime.',
      'Created reusable UI design systems and improved frontend delivery cycles by 25%.',
      'Optimized Redux Toolkit caching strategies, reducing server-request overhead by 35%.'
    ]
  },
  {
    period: 'MAR 2015 — AUG 2016', role: 'Frontend Developer', company: 'Appie Mobiquity Pvt. Ltd.',
    points: [
      'Converted 50+ high-fidelity UI/UX mockups into responsive, pixel-accurate web interfaces.',
      'Integrated location-based APIs for real-time mapping features used by 50,000+ active mobile users.',
      'Reduced initial bundle sizes by 30% through code splitting, lazy loading and asset minification.'
    ]
  },
  {
    period: 'SEP 2009 — MAR 2015', role: 'Web Designer / Frontend Developer', company: 'Welspun Corp Ltd.',
    points: [
      'Maintained 5 global corporate web portals and improved organic traffic by 20% through SEO and performance enhancements.',
      'Delivered CMS UI improvements that made site navigation more efficient.'
    ]
  },
];

const projectPlaceholders = [
  { number: '01', type: 'REACT / NEXT.JS', title: 'Featured project coming soon', text: 'A space for a standout application, the problem it solves, and the impact it delivers.', icon: MonitorSmartphone },
  { number: '02', type: 'UI ARCHITECTURE', title: 'Case study coming soon', text: 'Showcase reusable components, design systems, frontend architecture, or performance work.', icon: Layers3 },
  { number: '03', type: 'PALANTIR / AI', title: 'Technical deep dive coming soon', text: 'Add a project walkthrough covering integrations, analytics, AI-assisted workflows, or custom widgets.', icon: Sparkles },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['About', '#about'], ['Expertise', '#expertise'], ['Experience', '#experience'], ['Portfolio', '#portfolio'], ['Contact', '#contact']];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ravindra Shinde home"><span className="brand-mark">RS</span><span>Ravindra Shinde<span className="brand-dot">.</span><small>FRONTEND ENGINEER</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO THE RIGHT OPPORTUNITY</div>
            <h1>I build digital<br /><span>experiences</span> that<br />move business forward.</h1>
            <p className="hero-lede">I’m <strong>Ravindra Shinde</strong> — a Senior Frontend / React.js Engineer with 14+ years of experience turning complex requirements into reliable, intuitive web applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#portfolio">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="/Ravindra-Shinde-Resume.docx" download><Download size={16} /> Download résumé</a>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/ravi1811" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="https://github.com/ravi1811" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <span className="social-divider" />
              <span><MapPin size={16} /> Navi Mumbai, India</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Frontend engineering visual">
            <div className="visual-glow" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="code-card card-back"><div className="window-dots"><i /><i /><i /></div><span className="code-muted">// make it useful</span><br /><span className="code-purple">const</span> <span className="code-blue">experience</span> = {'{'}<br /><span className="indent code-green">clarity: true,</span><br /><span className="indent code-green">performance: true,</span><br /><span className="indent code-green">impact: <b>“measurable”</b></span><br />{'}'};</div>
            <div className="code-card card-front"><div className="card-top"><span className="mini-icon"><Code2 size={17} /></span><span>frontend.tsx</span><span className="live-pill">LIVE</span></div><div className="code-lines"><p><em>01</em> <span className="code-purple">function</span> <span className="code-yellow">BuildImpact</span>() {'{'}</p><p><em>02</em> <span className="indent code-purple">return</span> (</p><p><em>03</em> <span className="indent2 code-blue">&lt;GreatExperience</span></p><p><em>04</em> <span className="indent3 code-green">fast</span></p><p><em>05</em> <span className="indent3 code-green">accessible</span></p><p><em>06</em> <span className="indent3 code-green">builtToScale</span></p><p><em>07</em> <span className="indent2 code-blue">/&gt;</span></p><p><em>08</em> <span className="indent">);</span></p><p><em>09</em> {'}'}</p></div></div>
            <div className="floating-badge badge-years"><span className="badge-icon"><Rocket size={17} /></span><span><strong>14+ years</strong><small>building for the web</small></span></div>
            <div className="floating-badge badge-stack"><span className="stack-symbol">{`{ }`}</span><span><strong>React · Next.js</strong><small>TypeScript · UI systems</small></span></div>
            <div className="visual-caption">Thoughtful engineering. Measurable impact.</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="metrics-strip"><div className="metrics-inner"><div><strong>14<span>+</span></strong><small>Years of experience</small></div><div><strong>12<span>+</span></strong><small>Healthcare modules delivered</small></div><div><strong>40<span>%</span></strong><small>Faster page loads</small></div><div><strong>5k<span>+</span></strong><small>Daily users enabled</small></div></div></section>

        <section className="section section-light" id="about"><div className="section-wrap about-grid"><div className="section-heading"><span className="section-kicker">01 / ABOUT ME</span><h2>Engineering with<br /><span>purpose.</span></h2><div className="heading-line" /></div><div className="about-copy"><p className="large-copy">I enjoy solving the hard parts of frontend development — from shaping scalable architecture to making complex workflows feel simple.</p><p>Across healthcare, banking, enterprise technology and manufacturing, I’ve built responsive applications, reusable UI systems, analytics dashboards and API-driven experiences. I combine strong engineering fundamentals with practical AI-assisted workflows to help teams deliver quality software faster.</p><div className="about-tags"><span><Check size={14} /> Product-minded</span><span><Check size={14} /> Performance-focused</span><span><Check size={14} /> Team collaborator</span></div></div></div></section>

        <section className="section section-dark" id="expertise"><div className="section-wrap"><div className="section-heading heading-row"><div><span className="section-kicker">02 / EXPERTISE</span><h2>The tools behind<br /><span>the outcomes.</span></h2></div><p className="heading-intro">A practical toolkit for building accessible, maintainable and production-ready digital products.</p></div><div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-number">0{index + 1}</div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

        <section className="section section-light" id="experience"><div className="section-wrap"><div className="section-heading heading-row"><div><span className="section-kicker">03 / EXPERIENCE</span><h2>Experience that<br /><span>delivers.</span></h2></div><p className="heading-intro">A career built around solving real business problems with dependable frontend engineering.</p></div><div className="timeline">{experience.map((job, index) => <article className="timeline-item" key={job.role}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-content"><div className="timeline-meta">{job.period}</div><h3>{job.role}</h3><div className="timeline-company">{job.company}</div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div></div></section>

        <section className="section portfolio-section" id="portfolio"><div className="section-wrap"><div className="section-heading heading-row"><div><span className="section-kicker">04 / SELECTED WORK</span><h2>Work in progress.<br /><span>Impact in focus.</span></h2></div><p className="heading-intro">This space is ready for my portfolio. Detailed case studies and live project links will be added soon.</p></div><div className="portfolio-grid">{projectPlaceholders.map(project => { const Icon = project.icon; return <article className="project-card project-placeholder" key={project.number}><div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-icon"><Icon size={22} /></span></div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.text}</p><div className="project-footer"><span className="coming-soon"><span /> DETAILS COMING SOON</span><ArrowUpRight size={18} /></div></article>; })}</div><div className="portfolio-note"><Sparkles size={18} /><span>Portfolio cards are placeholders for now — replace them with your projects, screenshots, GitHub links and case studies whenever you’re ready.</span></div></div></section>

        <section className="section section-light education-section"><div className="section-wrap education-grid"><div><span className="section-kicker">A LITTLE MORE</span><h2>Always learning.<br /><span>Always improving.</span></h2></div><div className="education-list"><div><span className="edu-icon"><Globe2 size={18} /></span><div><h3>Bachelor of Computer Applications (BCA)</h3><p>Sikkim Manipal University</p></div></div><div><span className="edu-icon"><BriefcaseBusiness size={18} /></span><div><h3>Diploma in Web Design</h3><p>Alison</p></div></div><div><span className="edu-icon"><Code2 size={18} /></span><div><h3>Certification in HTML5</h3><p>Alison</p></div></div></div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><span className="section-kicker">05 / LET’S CONNECT</span><h2>Have a challenge<br />worth <span>solving?</span></h2><p>Let’s talk about frontend engineering, product development, architecture or your next opportunity.</p></div><div className="contact-card"><a href="mailto:ravihshinde2004@gmail.com"><span className="contact-icon"><Mail size={19} /></span><span><small>EMAIL ME</small><strong>ravihshinde2004@gmail.com</strong></span><ArrowUpRight size={18} /></a><a href="tel:+919152622371"><span className="contact-icon"><MessageCircle size={19} /></span><span><small>CALL / WHATSAPP</small><strong>+91 91526 22371</strong></span><ArrowUpRight size={18} /></a><a href="https://www.linkedin.com/in/ravi1811" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={19} /></span><span><small>CONNECT ON LINKEDIN</small><strong>linkedin.com/in/ravi1811</strong></span><ArrowUpRight size={18} /></a></div></div></section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">RS</span><span>Ravindra Shinde<span className="brand-dot">.</span><small>FRONTEND ENGINEER</small></span></a><p>Designed with intent. Built for impact.</p><div className="footer-links"><a href="https://github.com/ravi1811" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/ravi1811" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:ravihshinde2004@gmail.com" aria-label="Email"><Mail size={18} /></a></div><span className="copyright">© {new Date().getFullYear()} Ravindra Shinde</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);

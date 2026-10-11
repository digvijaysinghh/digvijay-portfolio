import MenuOverlay from './components/MenuOverlay';

const disciplines = [
  { number: '01', name: 'API security', detail: 'Understand the surface. Protect the path.', href: '#work' },
  { number: '02', name: 'Security validation', detail: 'Test what controls actually do.', href: '#work' },
  { number: '03', name: 'Vulnerability assessment', detail: 'Find, verify, explain, improve.', href: '#work' },
  { number: '04', name: 'Quality engineering', detail: 'Make expected behaviour measurable.', href: '#about' },
];

export default function HomePage() {
  return (
    <main id="home">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Digvijay Singh, home">
          <span className="wordmark-name">DIGVIJAY SINGH</span>
          <span className="wordmark-role">CYBERSECURITY / ENGINEERING</span>
        </a>
        <div className="header-note"><span className="status-dot" /> PERSONAL SITE / 2026</div>
        <MenuOverlay />
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-meta eyebrow-row">
          <span>INDEPENDENTLY CURIOUS. PRACTICALLY MINDED.</span>
          <span>28°36&apos; N / 77°13&apos; E</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">HELLO, I&apos;M</p>
            <h1 id="hero-title">Digvijay<br /><span>Singh<span className="name-period">.</span></span></h1>
            <div className="hero-bottomline">
              <p className="hero-title-label">Cybersecurity Engineer<br /><span>working across systems, not just tools.</span></p>
              <a className="round-link" href="#work" aria-label="Explore selected work"><span>↘</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract technical line drawing">
            <div className="art-label art-label-top">FIG. 01 — REQUEST PATH</div>
            <svg className="trace-art" viewBox="0 0 520 590" role="img" aria-label="Abstract network paths and connected nodes">
              <defs>
                <linearGradient id="traceFade" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7b9cff" stopOpacity=".8" />
                  <stop offset="100%" stopColor="#7b9cff" stopOpacity=".08" />
                </linearGradient>
              </defs>
              <path d="M90 72 H225 V158 H365 V260 H438" />
              <path d="M42 220 H154 V322 H284 V405 H474" />
              <path d="M115 520 V450 H205 V382 H365 V490" />
              <path d="M225 158 V48 H320" />
              <path d="M284 322 V240 H365 V158" />
              <path d="M154 322 H70 V405 H205" />
              <path className="trace-highlight" d="M42 220 H154 V322 H284 V405 H474" />
              {[ [90,72],[225,158],[365,260],[438,260],[42,220],[154,322],[284,405],[474,405],[115,520],[205,382],[365,490],[320,48],[365,158],[70,405] ].map(([cx,cy], index) => (
                <g key={`${cx}-${cy}`} className={index === 5 || index === 7 ? 'node node-bright' : 'node'}>
                  <circle cx={cx} cy={cy} r={index === 5 || index === 7 ? 4 : 2.5} />
                  {(index === 1 || index === 5 || index === 9) && <circle className="node-ring" cx={cx} cy={cy} r="10" />}
                </g>
              ))}
              <text x="244" y="143">INSPECT</text>
              <text x="303" y="390">DECISION</text>
              <text x="64" y="205">REQUEST / 001</text>
              <text x="374" y="477">ORIGIN</text>
            </svg>
            <div className="art-caption"><span>TRACE / 001</span><span>FOLLOW THE SIGNAL</span></div>
            <div className="art-coordinate">FIG. A — ABSTRACT, NOT A PRODUCTION TOPOLOGY</div>
          </div>
        </div>
        <div className="hero-intro-row">
          <p className="intro-copy">I work across API and web security, security validation, vulnerability assessment, and Zero Trust. I like understanding how systems behave, where they fail, and how to make protection work in the real world.</p>
          <a className="text-link" href="#work">A little of what I do <span>↘</span></a>
        </div>
        <div className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</div>
      </section>

      <section className="work-section section-shell" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">A FEW AREAS I MOVE BETWEEN</p>
          <span className="section-index">01 — 04</span>
        </div>
        <h2 id="work-title">Different layers.<br /><span>One curious mind.</span></h2>
        <div className="discipline-list">
          {disciplines.map((item) => (
            <a className="discipline-row" href={item.href} key={item.number}>
              <span className="discipline-number">{item.number}</span>
              <span className="discipline-name">{item.name}</span>
              <span className="discipline-detail">{item.detail}</span>
              <span className="discipline-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about-strip section-shell" id="about">
        <p className="eyebrow">A NOTE ON HOW I WORK</p>
        <div className="about-strip-content">
          <h2>Security is a practice.<br /><span>Not a list of products.</span></h2>
          <p>I enjoy the work between the obvious steps: tracing dependencies, asking what a control actually changed, and making the result understandable to the people who rely on it.</p>
        </div>
      </section>

      <footer className="site-footer section-shell" id="contact">
        <div><p className="eyebrow">HAVE SOMETHING INTERESTING?</p><h2>Let&apos;s talk<span>.</span></h2></div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/digvijaysinghh/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/digvijaysinghh" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://tryhackme.com/p/digvijaysinghh" target="_blank" rel="noreferrer">TryHackMe ↗</a>
          <span className="email-note">Dedicated email to be added</span>
        </div>
        <div className="footer-bottom"><span>© 2026 DIGVIJAY SINGH</span><span>MADE WITH INTENTION, NOT A TEMPLATE.</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}

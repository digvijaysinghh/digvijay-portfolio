'use client';

import { useState } from 'react';

type Role = {
  period: string;
  company: string;
  role: string;
  context: string;
  did: string[];
  learned: string;
  technologies: string[];
};

const roles: Role[] = [
  {
    period: 'SEP 2025 — PRESENT',
    company: 'Regent Digitech',
    role: 'Cybersecurity Engineer',
    context: 'Resident engineering for enterprise security programmes, working at the meeting point of application teams, security controls, operational investigations, and stakeholder decisions.',
    did: ['Owned day-to-day API security engineering: discovery and inventory work across applications and API gateways, including the identification of shadow and zombie APIs that need scrutiny.', 'Turned API traffic into a clearer risk picture by carrying out posture assessment and sensitive-data classification across request and response payloads, then translating findings into management-ready reporting.', 'Configured and tuned positive security models, WAF rules, rate limits, bot classification, and access policies while investigating security events and separating false positives from meaningful signals.', 'Coordinated the operational work surrounding security changes—policy migration, traffic-diversion dependencies, validation, troubleshooting, and the impact on legitimate application behaviour.', 'Delivered 5+ Picus Security POCs and deployments, validating detection and prevention coverage across EDR, firewall, WAF, email security, and DLP controls.'],
    learned: 'Strong security engineering is not just about deploying a product. It is about tracing dependencies, reading real traffic, making a defensible decision, and leaving the system more reliable than it was before.',
    technologies: ['Radware API Security', 'Cloud WAF', 'Picus Security', 'Zscaler', 'Netskope'],
  },
  {
    period: 'FEB 2025 — SEP 2025',
    company: 'Hitachi Systems India',
    role: 'Cybersecurity VAPT Intern',
    context: 'Web application and API assessment work built around reproducing issues, proving impact, and making remediation practical for the team receiving it.',
    did: ['Conducted risk-based assessments for web applications and APIs, moving from reconnaissance to reproducible evidence rather than stopping at automated scanner output.', 'Identified and validated issues including XSS, SQL injection, and authentication or login bypass, using the appropriate tooling to understand both exploitability and business impact.', 'Documented attack paths, proof-of-concepts, severity rationale, and mitigation guidance so developers and non-technical stakeholders could decide what to fix first.', 'Practised communicating the difference between a theoretical weakness, a verified finding, and a risk that needs immediate attention.'],
    learned: 'A finding is only valuable when the evidence is credible, the risk is intelligible, and the remediation path is realistic enough to be acted on.',
    technologies: ['Burp Suite', 'Nessus', 'OWASP ZAP', 'Nmap', 'SQLmap'],
  },
  {
    period: 'FEB 2024 — FEB 2025',
    company: 'E1133',
    role: 'Junior Cybersecurity Engineer',
    context: 'A hands-on bridge between security, QA, release confidence, and the way real users experience an application.',
    did: ['Conducted VAPT for web applications and APIs, validating issues rather than treating scans as final answers.', 'Built test coverage across manual testing, API testing, Selenium automation, Postman workflows, and performance testing with Apache JMeter and k6.', 'Investigated defects from symptom to root cause, then converted findings into clear test cases, regression coverage, and remediation recommendations.', 'Learned to see quality engineering as an upstream security skill: both disciplines begin with a precise understanding of expected behaviour and failure modes.'],
    learned: 'Security and quality are inseparable in practice. Both demand curiosity, repeatable evidence, and the discipline to keep asking what changed, why it changed, and whether the fix holds.',
    technologies: ['Selenium', 'Postman', 'Apache JMeter', 'k6', 'Metasploit'],
  },
];

export default function ExperienceRoadmap() {
  const [open, setOpen] = useState(0);

  return (
    <div className="roadmap" aria-label="Professional experience timeline">
      {roles.map((item, index) => {
        const isOpen = open === index;
        return (
          <article className={`roadmap-item${isOpen ? ' is-open' : ''}`} key={item.company}>
            <button className="roadmap-trigger" type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
              <span className="roadmap-point" aria-hidden="true" />
              <span className="roadmap-period mono">{item.period}</span>
              <span className="roadmap-company">{item.company}</span>
              <strong>{item.role}</strong>
              <span className="roadmap-action" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div className={`roadmap-panel${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
              <div className="roadmap-panel-inner">
                <p className="roadmap-context">{item.context}</p>
                <div className="roadmap-columns">
                  <div><p className="panel-label mono">WHAT I DID</p><ul>{item.did.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
                  <div><p className="panel-label mono">KEY LEARNING</p><p>{item.learned}</p></div>
                  <div><p className="panel-label mono">TOOLS & TECHNOLOGIES</p><div className="tool-tags">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

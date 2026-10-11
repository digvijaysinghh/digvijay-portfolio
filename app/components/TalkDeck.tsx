'use client';

import { useState } from 'react';

const entries = [
  { label: 'AZ-900 WORKSHOP', image: '/talk-azure-fundamentals.png', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7241089101154656256/', title: 'Azure Fundamentals, from first principles to secure access.', text: 'Hosted as a Microsoft Learn Student Ambassador. Covered cloud basics, deployment models, Azure core services, Azure Active Directory, and ended with an interactive quiz.' },
  { label: 'AZURE APP SERVICE', image: '/talk-azure-app-service.png', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7226558567158272000/', title: 'Hosting web applications with Microsoft Azure.', text: 'Walked through Azure’s core services, then demonstrated creating, customising, and deploying web applications with Azure App Service.' },
  { label: 'PENTATHON 2024', image: '/achievement-pentathon.png', link: 'https://lnkd.in/p/gebvXx4F', title: 'Top 10 nationally, from 8,000 participants.', text: 'A 48-hour CTF and VAPT challenge that reached the NCIIPC–AICTE Pentathon 2024 final stage. The work demanded persistence, collaboration, and calm under pressure.' },
  { label: 'COLLEGE CTF', image: '/achievement-college-ctf.png', link: '#community', title: 'First place in a late-night CTF sprint.', text: 'Won first place and earned a three-month PentesterLab Pro subscription. The durable prize was the habit of learning from every failed path.' },
  { label: 'GDG: BEYOND THE CODE', image: '/burp-suite-session.png', link: 'https://youtu.be/mCBwmQ_efmA?si=SO1Hjx0HoHxllcYX', title: 'Beyond the Code: a GDG GL Bajaj cybersecurity session.', text: 'An online GDG GL Bajaj session held on 24 May 2025. Explored Burp Suite, SQL injection, bug bounty fundamentals, and the practical first steps into a cybersecurity journey.' },
];

export default function TalkDeck() {
  const [active, setActive] = useState(0);
  const entry = entries[active];
  return <div className="talk-deck">
    <div className="talk-menu" role="tablist" aria-label="Talks and achievements">
      {entries.map((item, index) => <button key={item.label} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.label}</button>)}
    </div>
    <article className="talk-stage">
      <img src={entry.image} alt="" />
      <div className="talk-stage-copy"><p className="mono">SELECTED RECORD / 0{active + 1}</p><h3>{entry.title}</h3><p>{entry.text}</p><a href={entry.link} target={entry.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Open source ↗</a></div>
    </article>
  </div>;
}

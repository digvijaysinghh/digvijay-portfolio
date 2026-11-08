'use client';

import { useEffect, useState } from 'react';

const events = [
  ['focus', 'Digvijay Singh / security engineer'],
  ['speciality', 'Radware API Security / API discovery'],
  ['practice', 'Picus BAS / MITRE ATT&CK validation'],
  ['toolkit', 'Zscaler / Netskope / Burp Suite'],
  ['proof', 'Pentathon 2024 / Top 10 of 8,000'],
];

export default function SecurityRuntime() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisible((current) => current === events.length ? 1 : current + 1);
    }, 1350);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="security-runtime" aria-label="Digvijay Singh security engineering profile">
    <div className="runtime-head"><span className="runtime-lights"><i/><i/><i/></span><span>~/digvijay/profile.log</span><em>live profile</em></div>
    <div className="runtime-screen">
      {events.map(([stage, message], index) => <p className={index < visible ? 'is-visible' : ''} key={stage}><span className="runtime-time">23:{String(7 + index).padStart(2, '0')}</span><b>{index < visible ? '✓' : '·'}</b><strong>{stage}</strong><span>{message}</span></p>)}
      <span className="runtime-cursor">$</span>
    </div>
  </div>;
}

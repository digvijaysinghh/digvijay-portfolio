'use client';

import { useState } from 'react';

const signals = [
  ['01', 'Inspect', 'Start with the behaviour, not the assumption.'],
  ['02', 'Trace', 'Follow the request across the dependencies that shape it.'],
  ['03', 'Validate', 'Prove that the control changed the outcome.'],
];

export default function SignalConsole() {
  const [active, setActive] = useState(0);
  return <div className="signal-console" aria-label="How I approach security work">
    <div className="signal-copy"><span className="mono">METHOD / {signals[active][0]}</span><p>{signals[active][2]}</p></div>
    <div className="signal-controls">{signals.map(([number, label], index) => <button type="button" key={number} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={active === index ? 'is-active' : ''}><span>{number}</span>{label}</button>)}</div>
  </div>;
}

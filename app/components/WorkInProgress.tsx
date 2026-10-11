'use client';

import { useState } from 'react';

export default function WorkInProgress({ title, description, number }: { title: string; description: string; number: string }) {
  const [open, setOpen] = useState(false);
  return <><button className="work-row" type="button" onClick={() => setOpen(true)}><span className="mono">{number}</span><h3>{title}</h3><p>{description}</p><span className="work-arrow">↗</span></button>{open && <div className="wip-backdrop" role="dialog" aria-modal="true" aria-label="Case study in progress"><div className="wip-modal"><span className="mono">CASE STUDY / BUILDING</span><div className="wip-icon" aria-hidden="true">⌘</div><h3>{title}<br/>is being built properly.</h3><p>This case study is in progress. It will document the engineering context, investigation, decisions, validation, and lessons learned—without exposing client-sensitive information.</p><button type="button" onClick={() => setOpen(false)}>Okay, I&apos;ll come back ↗</button></div></div>}</>;
}

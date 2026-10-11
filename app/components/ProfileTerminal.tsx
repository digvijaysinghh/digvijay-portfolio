'use client';

import { FormEvent, PointerEvent, useEffect, useRef, useState } from 'react';

const files: Record<string, string[]> = {
  'about.txt': ['Cybersecurity engineer based in New Delhi.', 'Focus: API security, control validation, VAPT, and Zero Trust.'],
  'experience/': ['regent-digitech.md', 'hitachi-vapt.md', 'e1133.md'],
  'credentials/': ['radware-cap.md', 'zscaler-zdta.md', 'azure-az900.md', 'tryhackme-jrpt.md'],
  'community/': ['microsoft-learn-student-ambassador.md', 'gdg-cybersecurity.md', 'pentathon-2024.md'],
};

export default function ProfileTerminal() {
  const [history, setHistory] = useState<string[]>(['digvijay@portfolio:~$ ls', 'about.txt  experience/  credentials/  community/', 'Type “help” for suggested commands.']);
  const [value, setValue] = useState('');
  const [directory, setDirectory] = useState('~');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; startX: number; startY: number } | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  useEffect(() => { outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' }); }, [history]);
  const run = (event: FormEvent) => {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;
    let output: string[] = [];
    if (command === 'help') output = ['Commands: ls, cd [folder], pwd, cat [file], clear', 'Try: cd credentials  ·  ls  ·  cat about.txt'];
    else if (command === 'pwd') output = [`/home/digvijay/${directory === '~' ? '' : directory}`];
    else if (command === 'ls') output = directory === '~' ? ['about.txt  experience/  credentials/  community/'] : (files[`${directory}/`] ?? ['directory is empty']);
    else if (command.startsWith('cd ')) {
      const destination = command.slice(3).replace('/', '');
      if (destination === '..' || destination === '~') { setDirectory('~'); output = []; }
      else if (files[`${destination}/`]) {
        setDirectory(destination);
        output = [`opening /${destination}…`];
        document.getElementById(destination === 'experience' ? 'experience' : destination === 'credentials' ? 'credentials' : 'community')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      else output = [`cd: no such directory: ${destination}`];
    }
    else if (command === 'clear') { setHistory([]); setValue(''); return; }
    else if (command.startsWith('ls ')) output = files[command.slice(3)] ?? ['directory not found'];
    else if (command === 'cat about.txt') output = files['about.txt'];
    else if (command === 'cat experience/regent-digitech.md') output = ['Resident engineering: API discovery, policy tuning, event investigation, and security control validation.'];
    else if (command === 'cat community/pentathon-2024.md') output = ['NCIIPC–AICTE Pentathon 2024 CTF finalist — Top 10 of 8,000 participants.'];
    else output = [`command not found: ${command}`, 'Try “help”.'];
    setHistory((items) => [...items, `digvijay@portfolio:${directory}$ ${command}`, ...output]);
    setValue('');
  };
  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button')) return;
    drag.current = { x: position.x, y: position.y, startX: event.clientX, startY: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    setPosition({ x: drag.current.x + event.clientX - drag.current.startX, y: drag.current.y + event.clientY - drag.current.startY });
  };
  const endDrag = () => { drag.current = null; };
  return <aside className="profile-terminal" aria-label="Interactive profile terminal" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
    <div className="terminal-title" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag}><span>digvijay@portfolio — bash</span><button type="button" title="Hints: ls · cd credentials · cd experience · cd community · pwd · cat about.txt · clear" aria-label="Show terminal command hints">?</button></div>
    <div className="terminal-body" ref={outputRef}>{history.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div>
    <form onSubmit={run}><span>digvijay@portfolio:{directory}$</span><input value={value} onChange={(event) => setValue(event.target.value)} aria-label="Type a terminal command and press Enter" autoComplete="off" spellCheck="false" autoFocus /><i aria-hidden="true" /></form>
  </aside>;
}

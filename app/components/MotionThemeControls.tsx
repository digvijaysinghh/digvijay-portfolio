'use client';

import { useState } from 'react';

const themes = [
  { name: 'Orange', accent: '#ff6f18', glow: 'rgba(255,111,24,.34)' },
  { name: 'Amber', accent: '#ffb347', glow: 'rgba(255,179,71,.34)' },
  { name: 'Red', accent: '#a83d25', glow: 'rgba(168,61,37,.34)' },
];

export default function MotionThemeControls() {
  const [active, setActive] = useState(0);

  const selectTheme = (index: number) => {
    setActive(index);
    document.documentElement.style.setProperty('--motion-accent', themes[index].accent);
    document.documentElement.style.setProperty('--motion-glow', themes[index].glow);
  };

  return <div className="motion-themes" aria-label="Color themes">
    {themes.map((theme, index) => <button
      type="button"
      className={active === index ? 'is-active' : ''}
      aria-label={`${theme.name} theme`}
      aria-pressed={active === index}
      key={theme.name}
      onClick={() => selectTheme(index)}
      style={{ background: theme.accent }}
    />)}
  </div>;
}

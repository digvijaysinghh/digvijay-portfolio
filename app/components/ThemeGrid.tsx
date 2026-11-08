'use client';

import { CSSProperties, PointerEvent, useState } from 'react';

const cards = [
  { title: 'Work', description: 'Security engineering, API security, and control validation.', icon: '↘', href: '#work', colors: ['#ff9b62', '#d8644b', '#5f3046'] },
  { title: 'Experience', description: 'The roles, systems, and problems that shaped the practice.', icon: '◎', href: '#experience', colors: ['#f3d37a', '#b98952', '#60434c'] },
  { title: 'Credentials', description: 'Verified learning across cloud, security, and quality engineering.', icon: '✳', href: '#credentials', colors: ['#d6e0a1', '#86a477', '#36565a'] },
  { title: 'Talks', description: 'Lessons shared through workshops, CTFs, and community work.', icon: '↗', href: '#community', colors: ['#c5a5ef', '#7861b4', '#3c3a66'] },
];

export default function ThemeGrid() {
  const [active, setActive] = useState<number | null>(null);

  const updatePosition = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  };

  return <div className="theme-grid" aria-label="Explore the portfolio">
    {cards.map((card, index) => <a
      className={`theme-card${active === index ? ' is-active' : ''}`}
      href={card.href}
      key={card.title}
      onPointerEnter={() => setActive(index)}
      onPointerMove={updatePosition}
      onPointerLeave={() => setActive(null)}
      onFocus={() => setActive(index)}
      onBlur={() => setActive(null)}
      onClick={() => setActive(index)}
      style={{ '--theme-one': card.colors[0], '--theme-two': card.colors[1], '--theme-three': card.colors[2] } as CSSProperties}
    >
      <span className="theme-card-icon" aria-hidden="true">{card.icon}</span>
      <span className="theme-card-content"><strong>{card.title}</strong><span>{card.description}</span></span>
      <span className="theme-card-arrow" aria-hidden="true">↗</span>
    </a>)}
  </div>;
}

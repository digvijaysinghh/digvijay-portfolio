'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home', number: '01' },
  { label: 'Experience', href: '#experience', number: '02' },
  { label: 'Credentials', href: '#credentials', number: '03' },
  { label: 'Work', href: '#work', number: '04' },
  { label: 'Contact', href: '#contact', number: '05' },
];

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        className={`menu-trigger${open ? ' is-open' : ''}`}
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <span className="menu-mark" aria-hidden="true"><i /><i /></span>
      </button>
      <div id="site-menu" className={`menu-overlay${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="menu-overlay-inner">
          <p className="eyebrow">INDEX / DIGVIJAY SINGH</p>
          <nav aria-label="Main navigation">
            {links.map((link) => (
              <a href={link.href} key={link.number} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                <span className="menu-number">{link.number}</span>
                <span>{link.label}</span>
                <span className="menu-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <div className="menu-footer">
            <span>CYBERSECURITY / ENGINEERING</span>
            <span>NEW DELHI, INDIA</span>
          </div>
        </div>
      </div>
    </>
  );
}

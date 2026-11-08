'use client';

import { useState } from 'react';

export default function OpeningSequence() {
  const [closed, setClosed] = useState(false);

  return <div
    className={`opening-sequence${closed ? ' is-closed' : ''}`}
    aria-hidden="true"
    onAnimationEnd={(event) => {
      if (event.animationName === 'opening-exit') setClosed(true);
    }}
  >
    <div className="opening-wash"/>
    <div className="opening-signal" aria-hidden="true"><i/><i/><i/><b/></div>
    <div className="opening-mark">
      <span className="opening-index">SECURITY ENGINEERING / 2026</span>
      <div className="opening-words">
        <span>NEED SECURITY<br/>EXPERTISE.</span>
        <span>I GET<br/>THINGS DONE.</span>
        <span>SECURITY ENGINEERING<br/>IN PRACTICE.</span>
      </div>
      <span className="opening-location">DIGVIJAY SINGH · NEW DELHI, INDIA</span>
    </div>
  </div>;
}

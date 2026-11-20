import React from 'react';
import { PhotoIcon, EnvelopeIcon, BouquetIcon } from '../components/Icons.jsx';
import { content as c } from '../content.js';

export default function Menu({ go }) {
  const items = [
    ['photos', <PhotoIcon />],
    ['letter', <EnvelopeIcon />],
    ['flowers', <BouquetIcon />],
  ];
  return (
    <main className="screen">
      <p className="script h-lg" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>{c.menu.prompt}</p>
      <div className="cards">
        {items.map(([key, icon]) => (
          <button key={key} className="card" onClick={() => go(key)} aria-label={c.menu.cards[key]}>
            {icon}
            <span>{c.menu.cards[key]}</span>
          </button>
        ))}
      </div>
      <p className="footer-note">{c.menu.footer}</p>
    </main>
  );
}

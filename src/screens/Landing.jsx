import React from 'react';
import { Bear } from '../components/Icons.jsx';
import { content as c } from '../content.js';

export default function Landing({ go }) {
  return (
    <main className="screen">
      <Bear size={130} />
      <h1 className="script h-xl">{c.title}</h1>
      <p className="soft">{c.subtitle}</p>
      <div className="row">
        <button className="btn primary heartbeat" onClick={() => go('menu')}>{c.yes}</button>
        <button className="btn" onClick={() => go('sad')}>{c.no}</button>
      </div>
    </main>
  );
}

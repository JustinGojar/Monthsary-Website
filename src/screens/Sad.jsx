import React from 'react';
import { SadFace } from '../components/Icons.jsx';
import { content as c } from '../content.js';

export default function Sad({ go }) {
  return (
    <main className="screen">
      <SadFace size={170} />
      <p className="soft">{c.sad.line}</p>
      <button className="btn primary" onClick={() => go('landing')}>{c.sad.back}</button>
    </main>
  );
}

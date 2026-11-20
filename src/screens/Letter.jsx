import React, { useState } from 'react';
import { content as c } from '../content.js';
import { Heart } from '../components/Icons.jsx';

export default function Letter({ go }) {
  const [opened, setOpened] = useState(false);
  return (
    <main className="screen">
      {!opened ? (
        <>
          <button className="envelope" onClick={() => setOpened(true)} aria-label={c.letter.opener}>
            <span className="env-body" />
            <span className="env-flap" />
            <span className="env-seal"><Heart size={22} color="currentColor" /></span>
          </button>
          <p className="soft">{c.letter.opener}</p>
        </>
      ) : (
        <article className="paper-letter">
          <h1 className="script">{c.letter.greeting}</h1>
          {c.letter.body.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          <p className="sign">{c.letter.signoff}</p>
        </article>
      )}
      <button className="btn" onClick={() => go('menu')}>{c.back}</button>
    </main>
  );
}

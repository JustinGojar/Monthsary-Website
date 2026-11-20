import React, { useEffect, useRef, useState } from 'react';
import { Bouquet } from '../components/Icons.jsx';
import { content as c } from '../content.js';

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

function Player() {
  const { song } = c.flowers;
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [d, setD] = useState(0);

  useEffect(() => {
    if (!song.audio) return;
    const a = new Audio(song.audio);
    audio.current = a;
    a.addEventListener('timeupdate', () => setT(a.currentTime));
    a.addEventListener('loadedmetadata', () => setD(a.duration));
    a.addEventListener('ended', () => setPlaying(false));
    return () => { a.pause(); };
  }, [song.audio]);

  const toggle = () => {
    if (!audio.current) { window.open(song.link, '_blank', 'noopener'); return; }
    if (playing) audio.current.pause(); else audio.current.play();
    setPlaying(!playing);
  };
  const seek = (e) => {
    if (!audio.current || !d) return;
    const r = e.currentTarget.getBoundingClientRect();
    audio.current.currentTime = ((e.clientX - r.left) / r.width) * d;
  };
  const skip = (s) => audio.current && (audio.current.currentTime = Math.max(0, Math.min(d, audio.current.currentTime + s)));

  return (
    <div className="player">
      <h3>{song.title}</h3>
      <p className="artist">{song.artist}</p>
      <div className="bar" onClick={seek}><i style={{ width: d ? `${(t / d) * 100}%` : '0%' }} /></div>
      <div className="times"><span>{fmt(t)}</span><span>{d ? `-${fmt(d - t)}` : '--:--'}</span></div>
      <div className="controls">
        <button aria-label="Back 10 seconds" onClick={() => skip(-10)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM9.5 12 18 18V6z" /></svg>
        </button>
        <button className="play" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>
        <button aria-label="Forward 10 seconds" onClick={() => skip(10)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM14.5 12 6 18V6z" /></svg>
        </button>
      </div>
    </div>
  );
}

export default function Flowers({ go }) {
  return (
    <main className="screen">
      <div className="flowers-wrap">
        <div className="frame"><Bouquet /></div>
        <div className="song-col">
          <div>
            <h1 className="script h-lg">{c.flowers.heading}</h1>
            <p className="script" style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: 'var(--wine)' }}>{c.flowers.subheading}</p>
          </div>
          <Player />
        </div>
      </div>
      <button className="btn" onClick={() => go('menu')}>{c.back}</button>
    </main>
  );
}

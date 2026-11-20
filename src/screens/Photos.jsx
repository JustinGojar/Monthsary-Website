import React, { useEffect, useRef, useState } from 'react';
import PhotoSlot from '../components/PhotoSlot.jsx';
import { content as c } from '../content.js';

const KEY = 'monthsary-photos-v1';
const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
};

export default function Photos({ go }) {
  const [photos, setPhotos] = useState(load);
  const [open, setOpen] = useState(null);
  const [full, setFull] = useState(false);
  const replace = useRef(null);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(photos)); } catch { setFull(true); }
  }, [photos]);

  const set = (id) => (src) => setPhotos((p) => ({ ...p, [id]: src }));
  const remove = (id) => setPhotos((p) => { const n = { ...p }; delete n[id]; return n; });

  return (
    <main className="screen">
      <div className="photos-wrap">
        <div className="featured">
          <span className="me-when" aria-hidden="true">{c.photos.heading.toUpperCase().split('').join(' ')}</span>
          {c.photos.featured.map((label, i) => (
            <PhotoSlot key={i} rect label={label} src={photos[`f${i}`]} onChange={set(`f${i}`)} onOpen={(s) => setOpen({ id: `f${i}`, src: s, label })} />
          ))}
        </div>
        <div>
          <h1 className="script h-lg side-title">{c.photos.heading}</h1>
          <div className="circles">
            {c.photos.circles.map((label, i) => (
              <div className="circle-item" key={i}>
                <PhotoSlot label={label} src={photos[`c${i}`]} onChange={set(`c${i}`)} onOpen={(s) => setOpen({ id: `c${i}`, src: s, label })} />
                <span className="caption">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="hint">{full ? 'storage is full — try smaller pictures' : c.photos.hint}</p>
      <button className="btn" onClick={() => go('menu')}>{c.back}</button>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.label} />
            <span className="script" style={{ color: '#fff', fontSize: '2rem' }}>{open.label}</span>
            <div className="row">
              <label className="btn" style={{ cursor: 'pointer', background: '#fff' }}>
                change
                <input ref={replace} type="file" accept="image/*" hidden onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  const r = new FileReader();
                  r.onload = () => { const img = new Image(); img.onload = () => {
                    const k = Math.min(1, 640 / Math.max(img.width, img.height));
                    const cv = document.createElement('canvas'); cv.width = img.width * k; cv.height = img.height * k;
                    cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
                    set(open.id)(cv.toDataURL('image/jpeg', 0.82)); setOpen(null);
                  }; img.src = r.result; };
                  r.readAsDataURL(f);
                }} />
              </label>
              <button className="btn" style={{ background: '#fff' }} onClick={() => { remove(open.id); setOpen(null); }}>remove</button>
              <button className="btn primary" onClick={() => setOpen(null)}>close</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

import React, { useRef } from 'react';
import { Heart } from './Icons.jsx';

// Shrinks the chosen picture so it fits comfortably in localStorage.
function shrink(file, max = 640) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const k = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * k);
        c.height = Math.round(img.height * k);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL('image/jpeg', 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

export default function PhotoSlot({ src, label, rect, onChange, onOpen }) {
  const input = useRef(null);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      onChange(await shrink(file));
    } catch {
      /* ignore unreadable files */
    }
    e.target.value = '';
  };

  return (
    <>
      <button
        type="button"
        className={`slot ${rect ? 'slot-rect' : ''}`}
        aria-label={src ? `Open photo: ${label}` : `Add photo: ${label}`}
        onClick={() => (src ? onOpen(src) : input.current.click())}
      >
        {src ? (
          <img src={src} alt={label} />
        ) : (
          <span className="empty">
            <Heart size={rect ? 40 : 34} />
            <small>add photo</small>
          </span>
        )}
      </button>
      <input ref={input} type="file" accept="image/*" hidden onChange={handleFile} />
    </>
  );
}

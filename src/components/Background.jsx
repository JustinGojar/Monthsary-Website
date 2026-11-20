import React, { useMemo } from 'react';
import { Heart } from './Icons.jsx';

const COLORS = ['#e9a3b4', '#c2536f', '#f4c6cf', '#d98aa0', '#c9a24b'];

export default function Background({ count = 16 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 20,
        dur: 12 + Math.random() * 14,
        delay: -Math.random() * 24,
        drift: (Math.random() - 0.5) * 160,
        color: COLORS[i % COLORS.length],
      })),
    [count]
  );
  return (
    <>
      <div className="bg" />
      {petals.map((p) => (
        <Heart
          key={p.id}
          size={p.size}
          color={p.color}
          className="petal"
          style={{ left: `${p.left}%`, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, '--drift': `${p.drift}px` }}
        />
      ))}
    </>
  );
}

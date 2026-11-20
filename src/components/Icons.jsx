import React from 'react';

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const HeartPath = 'M50 86 C14 58 8 36 22 24 C34 14 46 22 50 32 C54 22 66 14 78 24 C92 36 86 58 50 86 Z';

export function PhotoIcon() {
  return (
    <svg viewBox="0 0 100 100" {...stroke} aria-hidden="true">
      <rect x="14" y="20" width="72" height="60" rx="10" />
      <circle cx="66" cy="38" r="6" />
      <path d="M16 72 L38 50 L54 66 L66 56 L84 72" />
    </svg>
  );
}

export function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 100 100" {...stroke} aria-hidden="true">
      <rect x="10" y="24" width="80" height="54" rx="6" />
      <path d="M12 28 L50 58 L88 28" />
      <path d="M50 52 C40 44 40 36 46 36 C48 36 50 38 50 40 C50 38 52 36 54 36 C60 36 60 44 50 52 Z" fill="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function BouquetIcon() {
  return (
    <svg viewBox="0 0 100 100" {...stroke} aria-hidden="true">
      <path d="M34 38 L66 38 L52 88 L48 88 Z" />
      <path d="M40 38 C28 30 30 16 40 18 C42 10 56 10 58 18 C70 16 72 30 62 38" />
      <path d="M48 56 L70 74 M52 62 L36 70" />
      <path d="M60 74 L76 66 L72 82 Z" fill="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Heart({ size = 20, color = 'currentColor', className, style }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path d={HeartPath} fill={color} />
    </svg>
  );
}

export function Bear({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true" className="bear">
      <circle cx="30" cy="30" r="15" fill="#c98a6b" />
      <circle cx="90" cy="30" r="15" fill="#c98a6b" />
      <circle cx="30" cy="30" r="8" fill="#f0c4b0" />
      <circle cx="90" cy="30" r="8" fill="#f0c4b0" />
      <ellipse cx="60" cy="62" rx="40" ry="38" fill="#d99a7a" />
      <ellipse cx="60" cy="76" rx="17" ry="13" fill="#f6d8c6" />
      <circle cx="46" cy="56" r="4.5" fill="#4a1f2e" />
      <circle cx="74" cy="56" r="4.5" fill="#4a1f2e" />
      <circle cx="47.5" cy="54.5" r="1.4" fill="#fff" />
      <circle cx="75.5" cy="54.5" r="1.4" fill="#fff" />
      <ellipse cx="60" cy="70" rx="6" ry="4.2" fill="#4a1f2e" />
      <path d="M60 74 L60 79 M52 81 Q60 87 68 81" stroke="#4a1f2e" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <ellipse cx="34" cy="70" rx="6" ry="4" fill="#e9a3b4" opacity=".75" />
      <ellipse cx="86" cy="70" rx="6" ry="4" fill="#e9a3b4" opacity=".75" />
      <path d={HeartPath} transform="translate(46 94) scale(.28)" fill="#c2536f" />
    </svg>
  );
}

export function SadFace({ size = 150 }) {
  return (
    <svg viewBox="0 0 140 110" width={size} aria-hidden="true">
      <ellipse cx="42" cy="46" rx="20" ry="23" fill="#2a1a20" />
      <ellipse cx="98" cy="46" rx="20" ry="23" fill="#2a1a20" />
      <circle cx="36" cy="38" r="6" fill="#fff" />
      <circle cx="92" cy="38" r="6" fill="#fff" />
      <circle cx="49" cy="55" r="3" fill="#fff" opacity=".8" />
      <circle cx="105" cy="55" r="3" fill="#fff" opacity=".8" />
      <ellipse cx="20" cy="76" rx="11" ry="7" fill="#e9a3b4" opacity=".85" />
      <ellipse cx="120" cy="76" rx="11" ry="7" fill="#e9a3b4" opacity=".85" />
      <path d="M58 90 Q70 76 82 90" stroke="#2a1a20" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Bouquet({ className }) {
  return (
    <svg viewBox="0 0 220 300" className={className} aria-hidden="true">
      <path d="M62 120 L158 120 L120 288 L100 288 Z" fill="#f7e3d3" stroke="#e8cbb5" strokeWidth="2" />
      <path d="M62 120 L110 288 L100 288 Z" fill="#efd2bc" />
      <path d="M96 150 C80 160 92 190 110 176 C128 190 140 160 124 150" fill="none" stroke="#a37b75" strokeWidth="2" />
      <g stroke="#7a3b4c" strokeWidth="2">
        <path d="M110 118 C60 80 66 28 104 50 C112 20 150 26 150 56 C176 40 190 84 150 108 Z" fill="none" opacity="0" />
      </g>
      <path d={HeartPath} transform="translate(60 30) scale(1.0)" fill="#b44a68" stroke="#7a3b4c" strokeWidth="2" />
      <path d={HeartPath} transform="translate(8 62) scale(.7)" fill="#cf7a92" stroke="#7a3b4c" strokeWidth="2" />
      <path d={HeartPath} transform="translate(120 56) scale(.74)" fill="#d98aa0" stroke="#7a3b4c" strokeWidth="2" />
      <path d={HeartPath} transform="translate(30 98) scale(.52)" fill="#e9a3b4" stroke="#7a3b4c" strokeWidth="2" />
      <path d={HeartPath} transform="translate(124 98) scale(.5)" fill="#cf7a92" stroke="#7a3b4c" strokeWidth="2" />
      <path d="M62 120 L158 120 L150 150 L70 150 Z" fill="#f4dcc9" opacity=".9" />
      <path d="M92 214 L128 214 L134 244 L110 238 L86 244 Z" fill="#c2536f" opacity=".9" />
    </svg>
  );
}

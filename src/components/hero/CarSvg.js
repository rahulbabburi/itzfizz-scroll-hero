// Top-view sports car with the nose pointing right. Purely decorative.
// Drawn on a 420x200 grid (2.1:1): the road's height in globals.css relies on that ratio.
export default function CarSvg() {
  return (
    <svg
      viewBox="0 0 420 200"
      className="block h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="car-shadow">
          <stop offset="0.6" stopColor="#000" stopOpacity="0.45" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="car-paint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c94a06" />
          <stop offset="0.28" stopColor="#ff8a2b" />
          <stop offset="0.5" stopColor="#ffa452" />
          <stop offset="0.72" stopColor="#ff8a2b" />
          <stop offset="1" stopColor="#c94a06" />
        </linearGradient>
        <linearGradient id="car-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0b0e12" />
          <stop offset="1" stopColor="#334150" />
        </linearGradient>
      </defs>

      <ellipse cx="214" cy="104" rx="210" ry="96" fill="url(#car-shadow)" />

      {/* Tyres, peeking out from under the wheel arches */}
      <g fill="#0b0b0b">
        <rect x="86" y="6" width="58" height="18" rx="8" />
        <rect x="86" y="176" width="58" height="18" rx="8" />
        <rect x="284" y="8" width="56" height="18" rx="8" />
        <rect x="284" y="174" width="56" height="18" rx="8" />
      </g>

      {/* Body: wide rear haunches, narrow waist, front arches, tapered nose */}
      <path
        d="M16 44C18 30 30 22 52 20C80 17 104 14 128 16C160 19 186 28 214 28C248 28 280 18 312 18C352 18 384 34 402 62C414 80 416 120 402 138C384 166 352 182 312 182C280 182 248 172 214 172C186 172 160 181 128 184C104 186 80 183 52 180C30 178 18 170 16 156C12 130 12 70 16 44Z"
        fill="url(#car-paint)"
      />

      {/* Bonnet stripes (the canopy covers their rear ends) */}
      <g fill="#1e1e1e" opacity="0.85">
        <rect x="290" y="87" width="118" height="9" rx="2" />
        <rect x="290" y="104" width="118" height="9" rx="2" />
      </g>

      {/* Engine-cover vents */}
      <g fill="#1e1e1e" opacity="0.55">
        <rect x="92" y="74" width="7" height="52" rx="3.5" />
        <rect x="110" y="72" width="7" height="56" rx="3.5" />
        <rect x="128" y="74" width="7" height="52" rx="3.5" />
      </g>

      {/* Glass canopy: wide windscreen at the front, tapering to the rear */}
      <path
        d="M300 62C322 74 324 126 300 138C262 152 196 146 160 128C146 120 146 80 160 72C196 54 262 48 300 62Z"
        fill="url(#car-glass)"
      />
      <path
        d="M292 70C306 86 306 114 292 130"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.3"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Side mirrors */}
      <g fill="#f07a24">
        <ellipse cx="286" cy="14" rx="12" ry="6" />
        <ellipse cx="286" cy="186" rx="12" ry="6" />
      </g>

      {/* Headlights and front intake */}
      <g fill="#fff4d1">
        <path d="M366 36L396 58L390 64L360 44Z" />
        <path d="M366 164L396 142L390 136L360 156Z" />
      </g>
      <rect x="404" y="86" width="6" height="28" rx="3" fill="#1e1e1e" />

      {/* Rear wing and tail lights */}
      <rect x="20" y="26" width="16" height="148" rx="5" fill="#1c1c1c" />
      <g fill="#ff3b30">
        <rect x="13" y="50" width="6" height="30" rx="3" />
        <rect x="13" y="120" width="6" height="30" rx="3" />
      </g>
    </svg>
  );
}

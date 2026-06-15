import React from "react";

// Isometric technical drawing of a warehouse/shelves
export function WarehouseSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(239, 201, 78, 0.05)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" rx="8" />

      {/* Axis Lines (Technical Blueprint) */}
      <line x1="50" y1="200" x2="450" y2="200" stroke="rgba(255,255,255,0.05)" strokeDasharray="5 5" />
      <line x1="250" y1="50" x2="250" y2="350" stroke="rgba(255,255,255,0.05)" strokeDasharray="5 5" />

      {/* Isometric Shelving Units */}
      {/* Shelf 1 (Left) */}
      <g stroke="rgba(239, 201, 78, 0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Vertical pillars */}
        <line x1="120" y1="80" x2="120" y2="300" />
        <line x1="180" y1="110" x2="180" y2="330" />
        <line x1="240" y1="80" x2="240" y2="300" />

        {/* Horizontal shelves */}
        {/* Top shelf */}
        <path d="M 120 120 L 180 150 L 240 120" />
        {/* Mid shelf */}
        <path d="M 120 180 L 180 210 L 240 180" />
        {/* Bottom shelf */}
        <path d="M 120 240 L 180 270 L 240 240" />

        {/* Shelf back support cross */}
        <line x1="120" y1="120" x2="240" y2="180" stroke="rgba(239, 201, 78, 0.15)" strokeWidth="1" />
        <line x1="240" y1="120" x2="120" y2="180" stroke="rgba(239, 201, 78, 0.15)" strokeWidth="1" />
        <line x1="120" y1="180" x2="240" y2="240" stroke="rgba(239, 201, 78, 0.15)" strokeWidth="1" />
        <line x1="240" y1="180" x2="120" y2="240" stroke="rgba(239, 201, 78, 0.15)" strokeWidth="1" />
      </g>

      {/* Stock Boxes on Shelf (Left) */}
      <g fill="rgba(239, 201, 78, 0.15)" stroke="rgba(239, 201, 78, 0.7)" strokeWidth="1">
        {/* Box on mid-shelf */}
        <path d="M 140 175 L 170 190 L 200 175 L 170 160 Z" />
        <path d="M 140 175 L 140 195 L 170 210 L 170 190 Z" />
        <path d="M 170 190 L 170 210 L 200 195 L 200 175 Z" />

        {/* Box on bottom shelf */}
        <path d="M 150 235 L 180 250 L 210 235 L 180 220 Z" fill="rgba(239, 201, 78, 0.25)" />
        <path d="M 150 235 L 150 255 L 180 270 L 180 250 Z" />
        <path d="M 180 250 L 180 270 L 210 255 L 210 235 Z" />
      </g>

      {/* Shelf 2 (Right) */}
      <g stroke="rgba(148, 163, 184, 0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Vertical pillars */}
        <line x1="280" y1="120" x2="280" y2="340" />
        <line x1="340" y1="90" x2="340" y2="310" />
        <line x1="400" y1="120" x2="400" y2="340" />

        {/* Horizontal shelves */}
        <path d="M 280 160 L 340 130 L 400 160" />
        <path d="M 280 220 L 340 190 L 400 220" />
        <path d="M 280 280 L 340 250 L 400 280" />
      </g>

      {/* Stock Boxes on Shelf (Right) */}
      <g fill="rgba(148, 163, 184, 0.1)" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1">
        {/* Box on mid-shelf */}
        <path d="M 300 200 L 330 185 L 360 200 L 330 215 Z" />
        <path d="M 300 200 L 300 220 L 330 235 L 330 215 Z" />
        <path d="M 330 215 L 330 235 L 360 220 L 360 200 Z" />
      </g>

      {/* Radar Scan / Tech overlay indicators */}
      <circle cx="170" cy="185" r="45" stroke="rgba(239, 201, 78, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="170" cy="185" r="2" fill="var(--accent-yellow)" />
      <line x1="170" y1="185" x2="215" y2="155" stroke="var(--accent-yellow)" strokeWidth="0.75" />
      <rect x="220" y="135" width="110" height="30" rx="4" fill="rgba(23, 24, 25, 0.85)" stroke="rgba(239, 201, 78, 0.4)" strokeWidth="1" />
      <text x="228" y="147" fill="var(--accent-yellow)" fontFamily="monospace" fontSize="8" fontWeight="bold">LOTE: 84930-B</text>
      <text x="228" y="158" fill="#cbd5e1" fontFamily="monospace" fontSize="8">RASTREAMENTO: 100%</text>

      {/* Dimension Indicators */}
      <line x1="120" y1="315" x2="240" y2="255" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <line x1="120" y1="310" x2="120" y2="320" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <line x1="240" y1="250" x2="240" y2="260" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <text x="160" y="300" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="7" transform="rotate(-26.5 160 300)">W = 1200mm</text>
    </svg>
  );
}

// Blueprint drawing of a Bolt & Nut with callouts
export function FastenersBlueprintSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <defs>
        <pattern id="grid-blueprint" width="15" height="15" patternUnits="userSpaceOnUse">
          <rect width="15" height="15" fill="none" />
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(56, 189, 248, 0.05)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-blueprint)" rx="8" />

      {/* Blueprint Center Line */}
      <line x1="30" y1="175" x2="470" y2="175" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="8 4 2 4" />

      {/* Screw Silhouette & Lines */}
      <g stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56, 189, 248, 0.03)" strokeLinejoin="round">
        {/* Hexagonal Head */}
        <path d="M 60 110 L 110 110 L 135 145 L 135 205 L 110 240 L 60 240 Z" />
        <line x1="110" y1="110" x2="110" y2="240" />

        {/* Shank (Body) */}
        <path d="M 135 135 L 280 135 L 280 215 L 135 215 Z" />

        {/* Threaded Section */}
        <path d="M 280 135 
                 L 290 145 L 290 135 L 300 145 L 300 135 L 310 145 L 310 135 L 320 145 L 320 135 L 330 145 L 330 135 L 340 145 L 340 135 L 350 145 L 350 135 L 360 145 L 360 135 L 370 145 L 370 135 L 380 145
                 L 380 205 L 370 215 L 370 205 L 360 215 L 360 205 L 350 215 L 350 205 L 340 215 L 340 205 L 330 215 L 330 205 L 320 215 L 320 205 L 310 215 L 310 205 L 300 215 L 300 205 L 290 215 L 290 205
                 L 280 215 Z" fill="rgba(56,189,248,0.08)" />

        {/* Bolt End Chamfer */}
        <path d="M 380 145 L 390 155 L 390 195 L 380 205 Z" />
      </g>

      {/* Hex Nut (Separate Assembly) */}
      <g stroke="var(--accent-yellow)" strokeWidth="1.5" fill="rgba(239, 201, 78, 0.05)" strokeLinejoin="round">
        {/* Nut Head */}
        <path d="M 400 115 L 435 115 L 455 145 L 455 205 L 435 235 L 400 235 Z" />
        <line x1="435" y1="115" x2="435" y2="235" />
        <circle cx="427" cy="175" r="30" stroke="var(--accent-yellow)" strokeWidth="0.75" strokeDasharray="3 3" fill="none" />
      </g>

      {/* Technical Dimensions Markers */}
      {/* Shank Length (L) */}
      <g stroke="#38bdf8" strokeWidth="0.75">
        <line x1="135" y1="90" x2="135" y2="125" />
        <line x1="390" y1="90" x2="390" y2="135" />
        <line x1="135" y1="95" x2="390" y2="95" />
        <polygon points="135,95 142,92 142,98" fill="#38bdf8" />
        <polygon points="390,95 383,92 383,98" fill="#38bdf8" />
      </g>
      <text x="250" y="88" fill="#38bdf8" fontFamily="monospace" fontSize="9" textAnchor="middle">L = 120mm (Classe 10.9)</text>

      {/* Thread Diameter (d) */}
      <g stroke="#38bdf8" strokeWidth="0.75">
        <line x1="395" y1="135" x2="410" y2="135" />
        <line x1="395" y1="215" x2="410" y2="215" />
        <line x1="405" y1="135" x2="405" y2="215" />
        <polygon points="405,135 402,142 408,142" fill="#38bdf8" />
        <polygon points="405,215 402,208 408,208" fill="#38bdf8" />
      </g>
      <text x="415" y="180" fill="#38bdf8" fontFamily="monospace" fontSize="9">M20 (P1.5)</text>

      {/* Nut Width (s) */}
      <g stroke="var(--accent-yellow)" strokeWidth="0.75">
        <line x1="400" y1="245" x2="400" y2="260" />
        <line x1="455" y1="245" x2="455" y2="260" />
        <line x1="400" y1="255" x2="455" y2="255" />
        <polygon points="400,255 407,252 407,258" fill="var(--accent-yellow)" />
        <polygon points="455,255 448,252 448,258" fill="var(--accent-yellow)" />
      </g>
      <text x="427" y="270" fill="var(--accent-yellow)" fontFamily="monospace" fontSize="9" textAnchor="middle">s = 30mm</text>

      {/* Compliance / Norm Banner */}
      <rect x="30" y="275" width="220" height="50" rx="4" fill="rgba(23, 24, 25, 0.85)" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
      <text x="40" y="290" fill="#38bdf8" fontFamily="monospace" fontSize="8" fontWeight="bold">ENGENHARIA DE FIXADORES</text>
      <text x="40" y="303" fill="#cbd5e1" fontFamily="sans-serif" fontSize="8">Norma Técnica: DIN 931 (ISO 4014)</text>
      <text x="40" y="316" fill="var(--accent-yellow)" fontFamily="sans-serif" fontSize="8" fontWeight="bold">Teste de Carga Estática: APROVADO</text>
    </svg>
  );
}

// Technical drawing of calipers measuring a precision thread (Consulting/Contact)
export function ConsultingSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <defs>
        <pattern id="grid-consult" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(239, 201, 78, 0.03)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-consult)" rx="8" />

      {/* Concentric circles representation of torque/alignment */}
      <circle cx="250" cy="175" r="120" stroke="rgba(239, 201, 78, 0.05)" strokeWidth="1" />
      <circle cx="250" cy="175" r="90" stroke="rgba(239, 201, 78, 0.05)" strokeWidth="1" />
      <circle cx="250" cy="175" r="60" stroke="rgba(239, 201, 78, 0.05)" strokeWidth="1" />

      {/* Diagonal rays */}
      <line x1="100" y1="25" x2="400" y2="325" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      <line x1="400" y1="25" x2="100" y2="325" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

      {/* Part to be measured (Special customized flange/screw piece) */}
      <g stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" fill="rgba(255, 255, 255, 0.02)">
        <rect x="210" y="70" width="80" height="210" rx="6" />
        <circle cx="250" cy="175" r="35" stroke="rgba(239, 201, 78, 0.4)" fill="rgba(239, 201, 78, 0.05)" />
        <path d="M 180 175 L 320 175" stroke="rgba(239, 201, 78, 0.2)" strokeDasharray="3 3" />
        <path d="M 250 105 L 250 245" stroke="rgba(239, 201, 78, 0.2)" strokeDasharray="3 3" />
      </g>

      {/* Caliper overlay (Metallic gray with orange highlights) */}
      <g stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Main Caliper Beam */}
        <path d="M 50 60 L 450 60" strokeWidth="5" />
        <path d="M 50 60 L 50 150" strokeWidth="4" /> {/* Static Jaw Left */}
        <path d="M 50 150 L 70 200 L 75 200 L 75 140" fill="#cbd5e1" />

        {/* Sliding Jaw Assembly (representing technical sizing) */}
        <g transform="translate(180, 0)">
          <rect x="0" y="45" width="60" height="30" rx="3" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M 30 60 L 30 150" strokeWidth="4" stroke="#e2e8f0" /> {/* Slider Jaw */}
          <path d="M 30 150 L 10 200 L 5 200 L 5 140" fill="#cbd5e1" stroke="#94a3b8" />
          
          {/* Vernier scale notches */}
          <line x1="5" y1="50" x2="5" y2="55" stroke="#fff" strokeWidth="1" />
          <line x1="15" y1="50" x2="15" y2="55" stroke="#fff" strokeWidth="1" />
          <line x1="25" y1="50" x2="25" y2="55" stroke="#fff" strokeWidth="1" />
          <line x1="35" y1="50" x2="35" y2="55" stroke="#fff" strokeWidth="1" />
          <line x1="45" y1="50" x2="45" y2="55" stroke="#fff" strokeWidth="1" />

          {/* Digital readout window */}
          <rect x="10" y="10" width="40" height="20" rx="2" fill="#171819" stroke="var(--accent-yellow)" strokeWidth="1" />
          <text x="30" y="24" fill="var(--accent-yellow)" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">135.0</text>
          <text x="45" y="18" fill="var(--accent-yellow)" fontFamily="sans-serif" fontSize="5">mm</text>
        </g>
        {/* Caliper ticks */}
        <line x1="100" y1="60" x2="100" y2="70" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="150" y1="60" x2="150" y2="70" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="200" y1="60" x2="200" y2="70" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="250" y1="60" x2="250" y2="70" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="300" y1="60" x2="300" y2="70" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="350" y1="60" x2="350" y2="70" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="400" y1="60" x2="400" y2="70" stroke="#cbd5e1" strokeWidth="1" />
      </g>

      {/* Target Focus graphic indicator */}
      <circle cx="210" cy="175" r="8" stroke="var(--accent-yellow)" strokeWidth="1.5" />
      <line x1="210" y1="162" x2="210" y2="188" stroke="var(--accent-yellow)" strokeWidth="0.75" />
      <line x1="197" y1="175" x2="223" y2="175" stroke="var(--accent-yellow)" strokeWidth="0.75" />

      {/* Legend details */}
      <rect x="290" y="245" width="180" height="80" rx="4" fill="rgba(23, 24, 25, 0.9)" stroke="rgba(239, 201, 78, 0.2)" strokeWidth="1" />
      <text x="300" y="262" fill="#cbd5e1" fontFamily="sans-serif" fontSize="8" fontWeight="bold">TOLERÂNCIA DIMENSIONAL</text>
      <text x="300" y="277" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif" fontSize="7">Limite Superior: +0.02mm</text>
      <text x="300" y="289" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif" fontSize="7">Limite Inferior: -0.01mm</text>
      <text x="300" y="301" fill="var(--accent-yellow)" fontFamily="sans-serif" fontSize="7" fontWeight="bold">CONFORMIDADE DA ENGENHARIA: 100%</text>
      <text x="300" y="315" fill="#38bdf8" fontFamily="monospace" fontSize="8" fontWeight="bold">ATENDIMENTO TÉCNICO CONSULTIVO</text>
    </svg>
  );
}

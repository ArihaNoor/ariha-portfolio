/*
  Bold editorial cover art for project cards — each "kind" renders a
  hand-built SVG scene over a spectrum gradient, with hard ink strokes.
  No screenshots / external image assets used.
*/
const ProjectArt = ({ kind = "ai", from = "#C9B6E8", to = "#463275", className = "" }) => {
  const id = kind + from.replace("#", "") + to.replace("#", "");
  const ink = "#0C0C0D";
  const paper = "#F4F1E9";
  return (
    <svg viewBox="0 0 400 240" className={className} fill="none" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#bg-${id})`} />
      <rect x="6" y="6" width="388" height="228" fill="none" stroke={ink} strokeWidth="2" />

      {kind === "ai" && (
        <g>
          <g fill={paper} stroke={ink} strokeWidth="2.5">
            {[70, 120, 170].map((y) => <circle key={`a${y}`} cx="110" cy={y} r="11" />)}
            {[95, 145].map((y) => <circle key={`b${y}`} cx="205" cy={y} r="11" />)}
            <circle cx="300" cy="120" r="14" />
          </g>
          <g stroke={ink} strokeWidth="2" opacity="0.85">
            {[70, 120, 170].map((y1) =>
              [95, 145].map((y2) => <line key={`l${y1}-${y2}`} x1="121" y1={y1} x2="194" y2={y2} />)
            )}
            {[95, 145].map((y2) => <line key={`o${y2}`} x1="216" y1={y2} x2="286" y2="120" />)}
          </g>
        </g>
      )}

      {kind === "chat" && (
        <g stroke={ink} strokeWidth="2.5">
          <rect x="64" y="56" width="170" height="44" rx="22" fill={paper} />
          <rect x="166" y="118" width="170" height="44" rx="22" fill={ink} stroke={ink} />
          <rect x="64" y="180" width="130" height="36" rx="18" fill={paper} />
          <g fill={ink} stroke="none">
            <circle cx="92" cy="78" r="4.5" /><circle cx="110" cy="78" r="4.5" /><circle cx="128" cy="78" r="4.5" />
          </g>
          <g fill={paper} stroke="none">
            <circle cx="196" cy="140" r="4.5" /><circle cx="214" cy="140" r="4.5" /><circle cx="232" cy="140" r="4.5" />
          </g>
        </g>
      )}

      {kind === "doc" && (
        <g stroke={ink} strokeWidth="2.5">
          <rect x="120" y="44" width="120" height="150" rx="6" fill={paper} />
          <rect x="150" y="60" width="120" height="150" rx="6" fill={paper} />
          <g stroke={ink} strokeWidth="3" strokeLinecap="round">
            <line x1="168" y1="92" x2="252" y2="92" />
            <line x1="168" y1="116" x2="252" y2="116" />
            <line x1="168" y1="140" x2="230" y2="140" />
          </g>
          <circle cx="290" cy="170" r="26" fill={ink} />
          <path d="M278 170l8 8 16-18" stroke={paper} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {kind === "web" && (
        <g stroke={ink} strokeWidth="2.5">
          <rect x="64" y="48" width="272" height="150" rx="8" fill={paper} />
          <line x1="64" y1="78" x2="336" y2="78" />
          <g fill={ink} stroke="none"><circle cx="82" cy="63" r="4.5" /><circle cx="98" cy="63" r="4.5" /><circle cx="114" cy="63" r="4.5" /></g>
          <rect x="84" y="98" width="120" height="16" rx="4" fill={from} />
          <rect x="84" y="124" width="160" height="9" rx="4" fill={ink} opacity="0.45" stroke="none" />
          <rect x="84" y="140" width="140" height="9" rx="4" fill={ink} opacity="0.45" stroke="none" />
          <rect x="84" y="162" width="78" height="24" rx="12" fill={ink} stroke="none" />
          <rect x="256" y="98" width="64" height="88" rx="6" fill={to} opacity="0.55" />
        </g>
      )}

      {kind === "game" && (
        <g stroke={ink} strokeWidth="2.5">
          <rect x="96" y="86" width="208" height="96" rx="48" fill={paper} />
          <g stroke={ink} strokeWidth="4" strokeLinecap="round">
            <line x1="136" y1="118" x2="136" y2="150" />
            <line x1="120" y1="134" x2="152" y2="134" />
          </g>
          <circle cx="252" cy="124" r="11" fill={from} stroke={ink} />
          <circle cx="276" cy="148" r="11" fill={to} stroke={ink} />
        </g>
      )}

      {kind === "data" && (
        <g stroke={ink} strokeWidth="2.5">
          <g fill={paper}>
            <rect x="78" y="148" width="36" height="54" />
            <rect x="128" y="108" width="36" height="94" />
            <rect x="178" y="76" width="36" height="126" />
            <rect x="228" y="128" width="36" height="74" />
            <rect x="278" y="96" width="36" height="106" />
          </g>
          <path d="M96 148 L146 108 L196 76 L246 128 L296 96" stroke={ink} strokeWidth="3" fill="none" />
          <g fill={ink} stroke="none">
            <circle cx="96" cy="148" r="5" /><circle cx="146" cy="108" r="5" />
            <circle cx="196" cy="76" r="5" /><circle cx="246" cy="128" r="5" /><circle cx="296" cy="96" r="5" />
          </g>
        </g>
      )}

      {/* asterisk accent */}
      <path
        d="M345 26h4v9l6.4-6.4 2.8 2.8L351.8 38H361v4h-9.2l6.4 6.4-2.8 2.8L349 44.8V54h-4v-9.2l-6.4 6.4-2.8-2.8L342.2 42H333v-4h9.2l-6.4-6.4 2.8-2.8L345 35v-9z"
        fill={paper}
        stroke={ink}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ProjectArt;

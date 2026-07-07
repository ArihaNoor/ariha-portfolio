const Logo = ({ className = "", compact = false }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-ink">
      <span className="font-display text-base leading-none text-paper">AN</span>
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-lavender-deep" />
    </span>
    {!compact && (
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg uppercase tracking-tight text-ink">
          Ariha Noor
        </span>
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-ink-mute">
          Product Engineer
        </span>
      </span>
    )}
  </div>
);

export default Logo;

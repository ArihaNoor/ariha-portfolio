"use client";
import { motion } from "framer-motion";

/* Six-point editorial asterisk / star — the signature accent */
export const Asterisk = ({ className = "", size = 28, color = "#0C0C0D" }) => (
  <svg
    aria-hidden
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill={color}
  >
    <path d="M11 1h2v6.6l4.7-4.7 1.4 1.4L14.4 9H21v2h-6.6l4.7 4.7-1.4 1.4L13 12.4V19h-2v-6.6l-4.7 4.7-1.4-1.4L9.6 11H3V9h6.6L4.9 4.3l1.4-1.4L11 7.6V1z" />
  </svg>
);

export const SpinAsterisk = ({ className = "", size = 40, color = "#0C0C0D" }) => (
  <motion.div
    aria-hidden
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
  >
    <Asterisk size={size} color={color} />
  </motion.div>
);

/* Reusable scrolling marquee strip.
   items: array of strings. variant: "ink" | "spectrum" | "paper" */
export const Marquee = ({
  items = [],
  variant = "ink",
  reverse = false,
  speed = "marquee",
  className = "",
}) => {
  const base =
    variant === "spectrum"
      ? "bg-lavender text-ink"
      : variant === "paper"
      ? "bg-paper-warm text-ink border-y-2 border-ink"
      : "bg-ink text-paper";
  const anim = reverse
    ? "animate-marquee-rev"
    : speed === "marquee-fast"
    ? "animate-marquee-fast"
    : "animate-marquee";
  return (
    <div className={`relative overflow-hidden py-3.5 ${base} ${className}`}>
      <div className={`flex w-max ${anim}`}>
        {[0, 1].map((g) => (
          <ul key={g} className="flex shrink-0 items-center">
            {items.map((t, i) => (
              <li
                key={`${g}-${i}`}
                className="flex items-center gap-5 px-5 font-display text-xl uppercase tracking-wide md:text-2xl"
              >
                {t}
                <Asterisk
                  size={16}
                  color={variant === "ink" ? "#D3C2EE" : "#0C0C0D"}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

/* Dotted grid block */
export const DotGrid = ({ className = "", color = "#0C0C0D" }) => (
  <svg aria-hidden className={className} width="120" height="120" viewBox="0 0 120 120">
    <defs>
      <pattern id="dg" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.6" fill={color} fillOpacity="0.55" />
      </pattern>
    </defs>
    <rect width="120" height="120" fill="url(#dg)" />
  </svg>
);

/* Concentric editorial rings */
export const Ring = ({ className = "", size = 120, color = "#0C0C0D" }) => (
  <svg aria-hidden className={className} width={size} height={size} viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="57" fill="none" stroke={color} strokeWidth="2" strokeDasharray="2 8" />
    <circle cx="60" cy="60" r="40" fill="none" stroke={color} strokeWidth="2" />
  </svg>
);

/* Squiggle underline accent */
export const Squiggle = ({ className = "", color = "#6B53A8" }) => (
  <svg aria-hidden className={className} viewBox="0 0 200 16" fill="none" preserveAspectRatio="none">
    <path
      d="M2 9C18 1 30 1 46 9s28 8 44 0 28-8 44 0 28 8 44 0"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

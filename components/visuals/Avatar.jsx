"use client";
import { motion } from "framer-motion";

/*
  Hand-built editorial avatar — a high-contrast, ink-and-paper figure
  with AI/code motifs. Reads as a bold cut-out on the spectrum band.
  Fully SVG, no external image assets.
*/
const Avatar = ({ className = "" }) => (
  <motion.svg
    className={className}
    viewBox="0 0 420 460"
    fill="none"
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  >
    <defs>
      <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FCE3D2" />
        <stop offset="1" stopColor="#F4C9AE" />
      </linearGradient>
    </defs>

    {/* Halo backdrop */}
    <circle cx="210" cy="208" r="168" fill="#F4F1E9" />
    <circle cx="210" cy="208" r="168" fill="none" stroke="#0C0C0D" strokeWidth="3" />
    <motion.circle
      cx="210" cy="208" r="150" fill="none" stroke="#0C0C0D" strokeWidth="2" strokeDasharray="3 11"
      animate={{ rotate: 360 }}
      transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "210px 208px" }}
    />

    {/* Shoulders / blazer */}
    <path d="M118 460 C118 372 150 330 210 330 C270 330 302 372 302 460 Z" fill="#0C0C0D" />
    <path d="M210 332 L186 402 L210 420 L234 402 Z" fill="#F4F1E9" />
    <path d="M210 332 L197 362 L210 374 L223 362 Z" fill="#6B53A8" />

    {/* Neck */}
    <path d="M192 300 H228 V338 C228 352 192 352 192 338 Z" fill="url(#skin)" />

    {/* Hair back */}
    <path d="M130 208 C130 130 175 94 210 94 C245 94 290 130 290 208 C290 280 282 330 270 352 C302 300 302 148 210 148 C118 148 118 300 150 352 C138 330 130 280 130 208 Z" fill="#0C0C0D" />

    {/* Face */}
    <path d="M154 196 C154 142 178 120 210 120 C242 120 266 142 266 196 C266 250 240 286 210 286 C180 286 154 250 154 196 Z" fill="url(#skin)" />

    {/* Cheeks */}
    <circle cx="180" cy="226" r="11" fill="#C9A9E0" opacity="0.6" />
    <circle cx="240" cy="226" r="11" fill="#C9A9E0" opacity="0.6" />

    {/* Eyes */}
    <g fill="#0C0C0D">
      <ellipse cx="188" cy="196" rx="6" ry="8" />
      <ellipse cx="232" cy="196" rx="6" ry="8" />
    </g>
    <circle cx="190" cy="193" r="2" fill="#fff" />
    <circle cx="234" cy="193" r="2" fill="#fff" />
    <g stroke="#0C0C0D" strokeWidth="2.6" strokeLinecap="round" fill="none">
      <path d="M178 180 Q188 175 198 180" />
      <path d="M222 180 Q232 175 242 180" />
    </g>

    {/* Nose + smile */}
    <path d="M210 206 Q214 218 208 222" stroke="#D89A82" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M196 246 Q210 258 224 246" stroke="#C2466A" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Hair front sweep */}
    <path d="M152 196 C150 150 178 120 210 120 C232 120 250 134 258 158 C236 146 196 150 178 178 C168 192 158 196 152 196 Z" fill="#0C0C0D" />
    {/* Asterisk hair pin */}
    <path d="M256 138l2.6 6.4 6.4-2.6-2.6 6.4 6.4 2.6-6.4 2.6 2.6 6.4-6.4-2.6-2.6 6.4-2.6-6.4-6.4 2.6 2.6-6.4-6.4-2.6 6.4-2.6-2.6-6.4 6.4 2.6 2.6-6.4z" fill="#A98ED9" stroke="#0C0C0D" strokeWidth="1.5" />

    {/* Floating code chip */}
    <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
      <rect x="38" y="150" width="66" height="46" rx="8" fill="#F4F1E9" stroke="#0C0C0D" strokeWidth="2.5" />
      <text x="71" y="180" textAnchor="middle" fontFamily="monospace" fontSize="19" fontWeight="700" fill="#0C0C0D">&lt;/&gt;</text>
    </motion.g>
    {/* Floating node */}
    <motion.g animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
      <circle cx="342" cy="180" r="27" fill="#F4F1E9" stroke="#0C0C0D" strokeWidth="2.5" />
      <circle cx="342" cy="180" r="6" fill="#6B53A8" />
      <g stroke="#0C0C0D" strokeWidth="2.5">
        <line x1="342" y1="160" x2="342" y2="167" />
        <line x1="342" y1="193" x2="342" y2="200" />
        <line x1="322" y1="180" x2="329" y2="180" />
        <line x1="355" y1="180" x2="362" y2="180" />
      </g>
      <g fill="#6B53A8"><circle cx="342" cy="160" r="3.2" /><circle cx="342" cy="200" r="3.2" /><circle cx="322" cy="180" r="3.2" /><circle cx="362" cy="180" r="3.2" /></g>
    </motion.g>
  </motion.svg>
);

export default Avatar;

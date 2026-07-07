"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../visuals/Logo";
import { Asterisk } from "../visuals/Decor";

const links = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#services" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 md:px-5 ${
          scrolled
            ? "border-2 border-ink bg-paper-warm shadow-hard-sm"
            : "border-2 border-transparent bg-paper/60 backdrop-blur-sm"
        }`}
      >
        <Link href="#home" aria-label="Home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative rounded-full px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0 h-0.5 origin-left scale-x-0 bg-lavender-deep transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Asterisk className="hidden animate-spin-slow lg:block" size={18} color="#6B53A8" />
          <Link href="#contact" className="hidden btn-primary !px-5 !py-2.5 sm:inline-flex">
            Let&apos;s talk <HiArrowUpRight />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-paper-warm text-ink lg:hidden"
          >
            {open ? <FaTimes size={17} /> : <FaBars size={17} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border-2 border-ink bg-paper-warm p-4 shadow-hard lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors hover:bg-ink hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Let&apos;s talk <HiArrowUpRight />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

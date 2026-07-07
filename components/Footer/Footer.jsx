"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";
import Logo from "../visuals/Logo";
import { Marquee } from "../visuals/Decor";

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/_arihanoor/", label: "Instagram" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/arihanoor/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/ArihaNoor", label: "GitHub" },
];

const links = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#services" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* CTA marquee */}
      <Link href="#contact" aria-label="Let's talk">
        <Marquee
          items={["Let's talk", "Click me", "Teamwork makes the dream work", "Let's make something cool"]}
          variant="spectrum"
          speed="marquee-fast"
        />
      </Link>

      <div className="section-pad py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="[&_.text-ink]:!text-paper [&_.text-ink-mute]:!text-paper/55">
              <Logo />
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper/65">
              Full-stack engineer shipping products end to end — clean front ends, solid back ends,
              and AI integrations woven in where they count.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border-2 border-paper/25 text-paper transition-all duration-200 hover:-translate-y-1 hover:border-lavender-deep hover:bg-lavender-deep hover:text-ink"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* nav */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper/55">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/75 transition-colors hover:text-lavender-deep">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* cta */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper/55">Let&apos;s connect</h4>
            <p className="mt-4 text-paper/75">Open to roles, freelance &amp; collaborations.</p>
            <a href="mailto:dev.ariha0@gmail.com" className="mt-3 inline-block font-display text-2xl uppercase tracking-tight text-paper underline-offset-4 hover:text-lavender-deep">
              dev.ariha0@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-paper/15 pt-6 sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-wide text-paper/55">
            © {new Date().getFullYear()} Ariha Noor — Designed &amp; built from scratch
          </p>
          <Link
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border-2 border-paper/25 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-paper transition-all hover:-translate-y-0.5 hover:border-lavender-deep hover:bg-lavender-deep hover:text-ink"
          >
            Back to top <HiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

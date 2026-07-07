"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaEnvelope, FaPhone, FaLocationDot, FaLinkedin, FaGithub, FaRegCalendarCheck } from "react-icons/fa6";
import Reveal from "../ui/Reveal";
import { Asterisk } from "../visuals/Decor";

const details = [
  { icon: FaEnvelope, label: "Email", value: "dev.ariha0@gmail.com", href: "mailto:dev.ariha0@gmail.com" },
  { icon: FaPhone, label: "Phone", value: "+92 304 2160150", href: "tel:+923042160150" },
  { icon: FaLocationDot, label: "Based in", value: "Faisalabad, Pakistan", href: null },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", projectIdea: "", projectDetails: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, projectIdea, projectDetails } = form;
    if (!name || !email || !projectIdea || !projectDetails) {
      Swal.fire({
        title: "Almost there!",
        text: "Please fill in all the fields.",
        icon: "warning",
        confirmButtonText: "Got it",
        confirmButtonColor: "#0C0C0D",
      });
      return;
    }
    Swal.fire({
      title: "Message sent ✶",
      text: "Thanks! I'll get back to you very soon.",
      icon: "success",
      confirmButtonText: "Great",
      confirmButtonColor: "#0C0C0D",
    }).then(() => setForm({ name: "", email: "", projectIdea: "", projectDetails: "" }));
  };

  const inputCls =
    "w-full rounded-xl border-2 border-ink bg-paper px-4 py-3 text-ink placeholder-ink-mute outline-none transition-all duration-200 focus:bg-paper-warm focus:shadow-hard-sm";

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="section-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        {/* Left: invite */}
        <Reveal dir="left">
          <span className="label">
            <Asterisk size={13} color="#6B53A8" /> (05) Let&apos;s build
          </span>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            Got an idea?
            <br />
            <span className="text-spectrum">Let&apos;s make</span>
            <br />
            it real.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-base">
            Whether it&apos;s an AI feature, a full product, or a curious &quot;could we…?&quot; — I&apos;d
            genuinely love to hear it. I&apos;m open to roles, freelance and collaborations.
          </p>

          <a
            href="https://calendly.com/dev-ariha0/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7 inline-flex"
          >
            <FaRegCalendarCheck /> Book a 30-min call
          </a>

          <div className="mt-9 flex flex-col gap-3">
            {details.map((d) => {
              const Icon = d.icon;
              const inner = (
                <div className="card card-hover flex items-center gap-4 p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-spectrum text-ink">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">{d.label}</p>
                    <p className="font-semibold text-ink">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? (
                <a key={d.label} href={d.href}>{inner}</a>
              ) : (
                <div key={d.label}>{inner}</div>
              );
            })}
          </div>

          <div className="mt-6 flex gap-3">
            <a href="https://www.linkedin.com/in/arihanoor/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-paper-warm text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-paper">
              <FaLinkedin size={18} />
            </a>
            <a href="https://github.com/ArihaNoor" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-paper-warm text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-paper">
              <FaGithub size={18} />
            </a>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal dir="right" delay={0.1}>
          <form onSubmit={handleSubmit} className="card p-6 shadow-hard md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wide text-ink">Name</label>
                <input id="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wide text-ink">Email</label>
                <input id="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputCls} />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="projectIdea" className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wide text-ink">Project idea</label>
              <input id="projectIdea" type="text" value={form.projectIdea} onChange={handleChange} placeholder="What are we building?" className={inputCls} />
            </div>
            <div className="mt-4">
              <label htmlFor="projectDetails" className="mb-1.5 block font-mono text-xs font-semibold uppercase tracking-wide text-ink">Details</label>
              <textarea id="projectDetails" rows="4" value={form.projectDetails} onChange={handleChange} placeholder="Tell me a little more…" className={`${inputCls} resize-none`} />
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">
              Send message <HiArrowUpRight />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

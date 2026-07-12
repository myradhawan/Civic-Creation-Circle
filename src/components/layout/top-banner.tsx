"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { links, currentIssue } from "@/lib/content";

const messages = [
  {
    text: "Our Resources and Structure, Your Voice and Impact",
    cta: "Apply to start a chapter",
    href: links.chapterApplication,
  },
  {
    text: currentIssue.petition.label,
    cta: "Sign the petition",
    href: currentIssue.petition.href,
  },
];

export function TopBanner() {
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 30000);
    return () => clearInterval(id);
  }, []);

  if (!open) return null;

  const message = messages[index];

  return (
    <div className="relative overflow-hidden bg-[#0e1f40] text-white">
      <div className="relative mx-auto flex min-h-[3.9rem] w-full max-w-7xl items-center justify-center px-10 py-3">
        <AnimatePresence mode="wait">
          <motion.a
            key={index}
            href={message.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-center"
          >
            <span className="text-sm font-semibold tracking-tight sm:text-base lg:text-lg">
              {message.text}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors group-hover:bg-white/25 sm:text-sm">
              {message.cta}
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>
        </AnimatePresence>

        <div className="absolute right-3 flex items-center gap-2">
          <div className="hidden items-center gap-1.5 sm:flex" aria-hidden>
            {messages.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Dismiss banner"
            onClick={() => setOpen(false)}
            className="text-white/60 transition-colors hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

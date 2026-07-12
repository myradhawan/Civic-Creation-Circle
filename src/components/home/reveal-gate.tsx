"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

/**
 * Initial-load splash: shows only the CCC logo + name, then reveals the page
 * on the first cursor movement, scroll, tap, or key press. Falls back to an
 * auto-reveal after a few seconds so no one gets stuck.
 */
export function RevealGate() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;

    const reveal = () => setRevealed(true);
    const events: (keyof WindowEventMap)[] = [
      "pointermove",
      "wheel",
      "touchstart",
      "keydown",
      "click",
      "scroll",
    ];
    events.forEach((e) => window.addEventListener(e, reveal, { passive: true, once: true }));
    const fallback = setTimeout(reveal, 3600);

    return () => {
      events.forEach((e) => window.removeEventListener(e, reveal));
      clearTimeout(fallback);
    };
  }, [revealed]);

  // Lock scroll while the gate is up.
  useEffect(() => {
    document.body.style.overflow = revealed ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [revealed]);

  return (
    <AnimatePresence>
      {!revealed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-[#0a2a63]"
        >
          <AuroraBackground variant="hero" />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/logo.png"
                alt="Civic Creation Circle"
                width={104}
                height={104}
                priority
                className="rounded-full shadow-[0_20px_60px_-20px_rgba(52,87,245,0.7)]"
              />
            </motion.div>
            <h1 className="font-display mt-7 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Civic Creation Circle
            </h1>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-lavender-300">
              Discuss. Change. Impact.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-10 text-xs tracking-wide text-white/45"
            >
              Move your cursor or scroll to enter
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

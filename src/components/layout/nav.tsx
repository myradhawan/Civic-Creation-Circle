"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 shadow-[0_1px_0_0_rgba(10,23,48,0.06)] backdrop-blur-lg"
          : "bg-white/0",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Civic Creation Circle" width={36} height={36} priority className="rounded-full" />
          <span className="font-display text-sm font-semibold tracking-tight text-navy-900 sm:text-base">
            Civic Creation Circle
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-royal-600" : "text-navy-900/70 hover:text-navy-900",
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-royal-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/get-involved" size="md" showArrow>
            Get Involved
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-navy-900 lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-navy-900/5 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-base font-medium",
                    pathname === item.href
                      ? "bg-lavender-100 text-royal-600"
                      : "text-navy-900/80",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/get-involved" className="mt-3 justify-center" showArrow>
                Get Involved
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

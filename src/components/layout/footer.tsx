import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { nav, site, links } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    // Shared deep, cool navy — the darkest color on the site, used only here
    // and in the top banner.
    <footer className="relative overflow-hidden bg-[#0e1f40] text-white">
      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Civic Creation Circle" width={40} height={40} className="rounded-full" />
              <span className="font-display text-base font-semibold tracking-tight">
                Civic Creation Circle
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-royal-400 hover:text-royal-300"
              >
                <InstagramIcon className="size-4.5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex size-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-royal-400 hover:text-royal-300"
              >
                <Mail className="size-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Civic Current Newsletter
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Get our monthly civic news summary, student op-eds, and CCC updates in your inbox.
            </p>
            <Button
              href={links.newsletterSubscribe}
              variant="light"
              className="mt-5"
              showArrow
            >
              Subscribe
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-xs text-white/70 sm:flex-row">
          <p>© 2026 Civic Creation Circle. All rights reserved.</p>
          <p>Livingston High School · Livingston, NJ</p>
        </div>
      </Container>
    </footer>
  );
}

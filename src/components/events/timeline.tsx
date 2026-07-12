"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { events } from "@/lib/content";

export function EventsTimeline({ items }: { items: typeof events }) {
  return (
    <div className="relative">
      <div
        className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-royal-400 via-royal-300/40 to-transparent sm:block"
        aria-hidden
      />
      <div className="space-y-14">
        {items.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col gap-6 sm:flex-row sm:pl-[76px]"
          >
            <div className="absolute left-0 top-1 hidden size-14 shrink-0 items-center justify-center rounded-full border border-royal-200 bg-white text-[11px] font-semibold uppercase tracking-tight text-royal-600 shadow-sm sm:flex">
              {event.displayDate.split(" ")[0]}
              <span className="sr-only">{event.displayDate}</span>
            </div>

            <div
              className={cn(
                "grid flex-1 gap-6 overflow-hidden rounded-3xl border border-navy-900/8 bg-white p-2 shadow-sm transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(10,23,48,0.25)]",
                event.image2 ? "sm:grid-cols-[1fr_1fr_1.1fr]" : "sm:grid-cols-[1fr_1.3fr]",
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(min-width: 640px) 30vw, 90vw"
                />
              </div>
              {event.image2 && (
                <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl sm:block">
                  <Image
                    src={event.image2}
                    alt={`${event.title}, additional photo`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="30vw"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center p-5 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-royal-500 sm:hidden">
                  {event.displayDate}
                </span>
                <h3 className="font-display mt-1 text-lg font-semibold tracking-tight text-navy-900 sm:mt-0">
                  {event.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-600">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

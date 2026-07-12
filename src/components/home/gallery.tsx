"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const photos = [
  { src: "/images/home/hero.jpg", alt: "CCC interest meeting in a classroom", span: "sm:row-span-2" },
  { src: "/images/events/02.jpg", alt: "Roundtable discussion on lowering the voting age" },
  { src: "/images/events/04.jpg", alt: "Carmen Cusido speaking event" },
  { src: "/images/events/05.jpg", alt: "NJISJ Vote16 briefing" },
  { src: "/images/press/02.jpg", alt: "Livingston Town Council testimony", span: "sm:row-span-2" },
  { src: "/images/events/01.jpg", alt: "First interest meeting, 30+ students" },
  { src: "/images/events/06.jpg", alt: "NJISJ presentation on social justice" },
  { src: "/images/events/03.jpg", alt: "League of Women Voters speaking event" },
  { src: "/images/home/story.jpg", alt: "A CCC member at an interest meeting" },
];

export function Gallery() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the year."
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:auto-rows-[240px] sm:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src + i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-square overflow-hidden rounded-2xl sm:aspect-auto ${photo.span ?? ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#0c1c66]/0 transition-colors duration-300 group-hover:bg-[#0c1c66]/10" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

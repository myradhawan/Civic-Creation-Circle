"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { homeImages } from "@/lib/content";

export function Mission() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <Image
              src={homeImages.story}
              alt="A CCC member at an interest meeting"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c66]/40 via-transparent to-transparent" />
          </motion.div>

          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-royal-500">
              About Us
            </span>
            <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Turning civic curiosity into action, one conversation at a time.
            </h2>
            <p className="mt-6 text-balance text-base leading-relaxed text-gray-600 sm:text-lg">
              The Civic Creation Circle is a school club based at Livingston High School in New Jersey,
              dedicated to teaching students how to engage in productive civic conversations and create
              tangible solutions for their communities. With time, the CCC plans to expand beyond Livingston
              High School, bringing civic awareness and engagement to more towns, counties, and states.
            </p>
            <p className="mt-4 text-balance text-base leading-relaxed text-gray-600 sm:text-lg">
              In today&apos;s world, it&apos;s easy to get wrapped up in heated conversations about civic
              issues, or to disengage entirely to &quot;keep the peace.&quot; At the CCC, we fight that
              polarization at the root, teaching youth to disagree respectfully, hold productive
              conversations, and build solutions together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about" showArrow>
                Read our full story
              </Button>
              <Button href="/get-involved" variant="ghost">
                Join us today
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

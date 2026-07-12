import { Counter } from "@/components/ui/counter";
import { Container } from "@/components/ui/container";
import { impactStats } from "@/lib/content";

export function ImpactStats() {
  return (
    <section className="border-y border-navy-900/5 bg-gray-50/70 py-12 sm:py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm leading-snug text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

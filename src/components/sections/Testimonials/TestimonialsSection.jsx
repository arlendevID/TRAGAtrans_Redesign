import { testimonialsData } from "../../../data/testimonials"

function TestimonialCard({ item }) {
  return (
    <article
      className="
        min-w-[280px] max-w-[280px]
        rounded-2xl border border-black/10 bg-white
        p-5 shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
        dark:border-white/10 dark:bg-slate-900
        sm:min-w-[320px] sm:max-w-[320px]
      "
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-traga-navy dark:text-white">
            {item.name}
          </h3>
          <p className="text-sm text-traga-blue dark:text-sky-300">
            {item.service}
          </p>
        </div>

        <span className="text-sm tracking-wide text-yellow-500">
          {"★".repeat(item.rating)}
        </span>
      </div>

      <p className="text-sm leading-6 text-black/65 dark:text-white/65">
        “{item.testimonial}”
      </p>
    </article>
  )
}

function MarqueeRow({ items, reverse = false }) {
  const loopItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-4 py-2 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loopItems.map((item, index) => (
          <TestimonialCard
            key={`${item.id}-${index}`}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialsSection() {
  const firstRow = testimonialsData.slice(0, 8)
  const secondRow = testimonialsData.slice(8, 15)

  return (
    <section className="overflow-hidden bg-[#f8fafc] py-20 dark:bg-slate-950">
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold text-traga-blue dark:text-sky-300">
          Testimoni Pelanggan
        </p>

        <h2 className="text-3xl font-bold text-traga-navy dark:text-white sm:text-4xl">
          Apa kata pelanggan TRAGAtrans?
        </h2>

        <p className="mt-4 text-black/60 dark:text-white/60">
          Kepercayaan pelanggan adalah prioritas kami dalam setiap layanan
          transportasi dan perjalanan wisata.
        </p>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>
    </section>
  )
}

export default TestimonialsSection
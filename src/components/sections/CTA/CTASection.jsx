import { motion } from "framer-motion"
import { siteData } from "../../../data/siteData"
import WhatsAppButton from "../../ui/WhatsAppButton"

function CTASection() {
  const admin1 = siteData.contact.whatsapp[0]
  const admin2 = siteData.contact.whatsapp[1]

  return (
    <section className="bg-white px-6 py-20 transition-colors duration-500 dark:bg-[#020817] sm:py-24 lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[36px]
          bg-traga-navy
          px-6
          py-16
          text-center
          shadow-2xl
          sm:px-12
          sm:py-20
          lg:px-20
        "
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-traga-cyan/25 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-trans-yellow/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span
            className="
              inline-block
              rounded-full
              border
              border-white/15
              bg-white/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-traga-cyan
              backdrop-blur-xl
            "
          >
            TRAGAtrans Yogyakarta
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Siap Memulai Perjalanan
            <span className="block text-trans-yellow">
              Bersama TRAGAtrans?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/65">
            Konsultasikan kebutuhan sewa mobil, private trip, antar jemput
            bandara, maupun perjalanan dinas bersama admin kami. TRAGAtrans
            siap melayani 24 jam.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <WhatsAppButton
              number={admin1.number}
              template="general"
              variant="primary"
              className="min-w-[200px]"
            >
              WhatsApp Admin 1
            </WhatsAppButton>

            <WhatsAppButton
              number={admin2.number}
              template="general"
              variant="secondary"
              className="min-w-[200px]"
            >
              WhatsApp Admin 2
            </WhatsAppButton>
          </div>

          <p className="mt-5 text-xs text-white/40">
            Pilih salah satu admin yang tersedia untuk konsultasi.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection
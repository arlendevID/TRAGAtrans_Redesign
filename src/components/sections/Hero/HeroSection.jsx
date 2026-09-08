import { motion } from "framer-motion"
import HeroCollage from "./HeroCollage"
import WhatsAppAdminPicker from "../../ui/WhatsAppAdminPicker"

function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-32
        pb-20

        transition-colors
        duration-500

        dark:bg-[#020817]

        sm:pt-36
        sm:pb-24
        lg:pt-40
        lg:pb-28
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-traga-cyan/10
          blur-[100px]

          dark:bg-traga-blue/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-trans-yellow/10
          blur-[100px]

          dark:bg-trans-yellow/5
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-14
          px-6

          lg:grid-cols-2
          lg:gap-16
          lg:px-8
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              inline-flex
              items-center
              rounded-full

              border
              border-traga-blue/10

              bg-traga-blue/[0.06]

              px-4
              py-2

              text-sm
              font-semibold

              text-traga-blue

              dark:border-traga-cyan/15
              dark:bg-traga-cyan/[0.08]
              dark:text-traga-cyan
            "
          >
            Sewa Mobil & Wisata Yogyakarta
          </motion.div>

          {/* HEADING */}
          <h1
            className="
              mt-7
              max-w-2xl

              text-4xl
              font-black
              leading-[1.05]
              tracking-tight

              text-traga-navy

              dark:text-white

              sm:text-5xl
              lg:text-[64px]
            "
          >
            Jelajahi Jogja dengan{" "}
            <span className="text-traga-blue dark:text-traga-cyan">
              perjalanan yang lebih nyaman.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-xl

              text-base
              leading-8

              text-black/55

              dark:text-white/55

              sm:text-lg
            "
          >
            Sewa mobil, perjalanan wisata, antar jemput bandara, hingga
            kebutuhan perjalanan dinas dalam satu layanan bersama TRAGAtrans.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-8

              flex
              flex-col
              gap-4

              sm:flex-row
              sm:items-center
            "
          >
            {/* WHATSAPP */}
            <WhatsAppAdminPicker
              template="general"
              className="
                inline-flex
                items-center
                justify-center

                rounded-full

                bg-trans-orange

                px-7
                py-4

                text-sm
                font-bold

                text-traga-navy

                shadow-[0_12px_30px_rgba(253,171,4,0.25)]

                transition-colors
                duration-300

                hover:bg-trans-yellow
              "
            >
              Booking Sekarang
            </WhatsAppAdminPicker>

            {/* ARMADA */}
            <motion.a
              href="/sewa-mobil"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                justify-center

                rounded-full

                border
                border-black/10

                bg-white

                px-7
                py-4

                text-sm
                font-bold

                text-traga-navy

                transition-colors

                hover:border-traga-blue/30
                hover:bg-traga-blue/[0.03]

                dark:border-white/15
                dark:bg-white/[0.04]
                dark:text-white
                dark:hover:border-traga-cyan/30
                dark:hover:bg-white/[0.07]
              "
            >
              Lihat Armada
            </motion.a>
          </div>

          {/* MINI INFO */}
          <div
            className="
              mt-8

              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3

              text-xs
              font-medium

              text-black/45

              dark:text-white/40
            "
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-traga-blue dark:bg-traga-cyan" />
              Layanan 24 Jam
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-trans-yellow" />
              Armada Terawat
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-traga-blue dark:bg-traga-cyan" />
              Driver Profesional
            </span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-[620px]

            lg:mx-0
            lg:ml-auto
          "
        >
          <HeroCollage />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"

const bookingSteps = [
  {
    number: "01",
    title: "Pilih Layanan",
    description:
      "Tentukan kebutuhan perjalanan Anda, mulai dari sewa mobil, private trip, antar jemput bandara, hingga perjalanan dinas.",
  },
  {
    number: "02",
    title: "Hubungi Admin",
    description:
      "Sampaikan tanggal perjalanan, tujuan, jumlah peserta, serta layanan atau armada yang Anda butuhkan kepada admin TRAGAtrans.",
  },
  {
    number: "03",
    title: "Konfirmasi & Booking",
    description:
      "Admin akan mengecek ketersediaan armada dan memberikan informasi harga. Setelah sesuai, konfirmasi pemesanan dengan pembayaran DP.",
  },
  {
    number: "04",
    title: "Siap Berangkat",
    description:
      "Armada dan driver akan disiapkan sesuai jadwal yang telah disepakati. Perjalanan Anda bersama TRAGAtrans siap dimulai.",
  },
]

function TimelineCard({ step, index }) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -50 : 50,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative
        ml-12
        md:ml-0
        md:w-[calc(50%-48px)]

        ${
          isLeft
            ? "md:mr-auto md:pr-12"
            : "md:ml-auto md:pl-12"
        }
      `}
    >
      <motion.article
        whileHover={{
          rotateX: -4,
          rotateY: isLeft ? 5 : -5,
          y: -6,
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.99,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]

          border border-black/10
          bg-white
          p-6

          shadow-[0_18px_50px_rgba(3,25,82,0.08)]

          dark:border-white/10
          dark:bg-[#07132d]
          dark:shadow-[0_18px_50px_rgba(0,0,0,0.3)]

          sm:p-8
        "
      >
        {/* background grid */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.025]
            dark:opacity-[0.05]
          "
          style={{
            backgroundImage: `
              linear-gradient(to right, #0782DC 1px, transparent 1px),
              linear-gradient(to bottom, #0782DC 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
          }}
        />

        {/* number */}
        <div
          className="
            relative z-10
            flex
            items-center
            justify-between
          "
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <span
            className="
              text-5xl
              font-black
              tracking-tighter
              text-traga-blue/15

              dark:text-traga-cyan/15
            "
          >
            {step.number}
          </span>

          <span
            className="
              h-3 w-3
              rounded-full
              bg-traga-blue

              shadow-[0_0_18px_rgba(7,130,220,0.55)]

              dark:bg-traga-cyan
            "
          />
        </div>

        {/* content */}
        <div
          className="relative z-10 mt-8"
          style={{
            transform: "translateZ(70px)",
          }}
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-traga-blue

              dark:text-traga-cyan
            "
          >
            Langkah {step.number}
          </p>

          <h3
            className="
              mt-2
              text-xl
              font-bold
              text-traga-navy

              dark:text-white

              sm:text-2xl
            "
          >
            {step.title}
          </h3>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-black/60

              dark:text-white/60
            "
          >
            {step.description}
          </p>
        </div>

        {/* bottom glow */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -right-20
            h-40 w-40
            rounded-full
            bg-traga-cyan/10
            blur-3xl
          "
        />
      </motion.article>
    </motion.div>
  )
}

function BookingTimeline() {
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  })

  const scaleY = useTransform(
    progress,
    [0, 1],
    [0, 1]
  )

  return (
    <section
      className="
        overflow-hidden
        bg-white
        py-20

        transition-colors
        duration-500

        dark:bg-[#020817]

        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}

        <div className="mx-auto max-w-2xl text-center">
          <p
            className="
              mb-3
              text-sm
              font-semibold
              text-traga-blue

              dark:text-traga-cyan
            "
          >
            Cara Booking
          </p>

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-traga-navy

              dark:text-white

              sm:text-4xl
            "
          >
            Perjalananmu dimulai
            <span
              className="
                block
                text-traga-blue
                dark:text-traga-cyan
              "
            >
              dalam 4 langkah mudah.
            </span>
          </h2>

          <p
            className="
              mt-5
              leading-7
              text-black/60

              dark:text-white/60
            "
          >
            Dari memilih layanan hingga keberangkatan,
            proses booking bersama TRAGAtrans dibuat
            sederhana dan praktis.
          </p>
        </div>

        {/* TIMELINE */}

        <div
          ref={timelineRef}
          className="
            relative
            mx-auto
            mt-16
            max-w-5xl

            space-y-10
            md:space-y-16
          "
        >
          {/* background line */}

          <div
            className="
              absolute
              bottom-0
              left-[15px]
              top-0
              w-[2px]
              rounded-full
              bg-black/10

              dark:bg-white/10

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* active line */}

          <motion.div
            style={{
              scaleY,
              transformOrigin: "top",
            }}
            className="
              absolute
              bottom-0
              left-[15px]
              top-0
              w-[2px]

              rounded-full

              bg-gradient-to-b
              from-traga-blue
              via-traga-cyan
              to-trans-yellow

              shadow-[0_0_15px_rgba(24,181,244,0.45)]

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {bookingSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* CENTER NODE */}

              <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.7,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="
                  absolute
                  left-0
                  top-8
                  z-20

                  flex
                  h-8 w-8
                  items-center
                  justify-center

                  rounded-full

                  border-4
                  border-white

                  bg-traga-blue

                  shadow-[0_0_22px_rgba(7,130,220,0.45)]

                  dark:border-[#020817]
                  dark:bg-traga-cyan

                  md:left-1/2
                  md:-translate-x-1/2
                "
              >
                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-white
                  "
                />
              </motion.div>

              <TimelineCard
                step={step}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookingTimeline
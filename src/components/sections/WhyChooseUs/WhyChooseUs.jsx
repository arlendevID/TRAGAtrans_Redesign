import { useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

const features = [
  {
    id: "01",
    title: "Armada Lengkap",
    description:
      "Pilihan kendaraan mulai dari city car, MPV, kendaraan premium, HiAce hingga bus untuk berbagai kebutuhan perjalanan.",
    accent: "TRAGA Fleet",
  },
  {
    id: "02",
    title: "Driver Berpengalaman",
    description:
      "Didukung pengemudi profesional dan berpengalaman untuk memberikan perjalanan yang nyaman, aman, dan tepat waktu.",
    accent: "Professional Driver",
  },
  {
    id: "03",
    title: "Layanan 24 Jam",
    description:
      "TRAGAtrans siap membantu kebutuhan transportasi dan perjalanan Anda selama 24 jam melalui admin kami.",
    accent: "24 / 7 Service",
  },
  {
    id: "04",
    title: "Perjalanan Fleksibel",
    description:
      "Melayani kebutuhan wisata, perjalanan pribadi, antar jemput bandara hingga perjalanan dinas dalam dan luar kota.",
    accent: "Flexible Journey",
  },
]

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateXRaw = useTransform(
    mouseY,
    [-0.5, 0.5],
    [10, -10]
  )

  const rotateYRaw = useTransform(
    mouseX,
    [-0.5, 0.5],
    [-10, 10]
  )

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 180,
    damping: 22,
  })

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 180,
    damping: 22,
  })

  const glowX = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["20%", "80%"]
  )

  const glowY = useTransform(
    mouseY,
    [-0.5, 0.5],
    ["20%", "80%"]
  )

  const handleMouseMove = (event) => {
    if (!cardRef.current) return

    const rect =
      cardRef.current.getBoundingClientRect()

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="perspective-[1200px]"
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="
          group
          relative
          min-h-[330px]
          overflow-hidden
          rounded-[30px]
          border
          border-black/10
          bg-white
          p-7
          shadow-[0_24px_60px_rgba(3,25,82,0.10)]

          dark:border-white/10
          dark:bg-[#07132d]
          dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)]

          sm:p-8
        "
      >
        {/* INTERACTIVE LIGHT */}
        <motion.div
          className="
            pointer-events-none
            absolute
            -inset-20
            opacity-0
            transition-opacity
            duration-300

            group-hover:opacity-100
          "
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x} ${y}, rgba(24,181,244,0.20), transparent 38%)`
            ),
          }}
        />

        {/* DECORATIVE GRID */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.035]

            dark:opacity-[0.06]
          "
          style={{
            backgroundImage: `
              linear-gradient(to right, #0782DC 1px, transparent 1px),
              linear-gradient(to bottom, #0782DC 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        {/* NUMBER */}
        <div
          style={{
            transform: "translateZ(55px)",
          }}
          className="
            relative z-10
            flex
            items-start
            justify-between
          "
        >
          <span
            className="
              text-5xl
              font-bold
              tracking-tighter
              text-traga-blue/15

              dark:text-traga-cyan/15
            "
          >
            {feature.id}
          </span>

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-traga-blue/15
              bg-traga-blue/5

              dark:border-traga-cyan/15
              dark:bg-traga-cyan/10
            "
          >
            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-traga-blue
                shadow-[0_0_18px_rgba(7,130,220,0.7)]

                dark:bg-traga-cyan
              "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            transform: "translateZ(75px)",
          }}
          className="
            relative
            z-10
            mt-14
          "
        >
          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-traga-blue

              dark:text-traga-cyan
            "
          >
            {feature.accent}
          </span>

          <h3
            className="
              mt-3
              text-2xl
              font-bold
              tracking-tight
              text-traga-navy

              dark:text-white
            "
          >
            {feature.title}
          </h3>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-black/55

              dark:text-white/55
            "
          >
            {feature.description}
          </p>
        </div>

        {/* 3D BOTTOM LINE */}
        <div
          style={{
            transform: "translateZ(35px)",
          }}
          className="
            absolute
            bottom-0
            left-8
            right-8
            h-px
            bg-gradient-to-r
            from-transparent
            via-traga-blue/40
            to-transparent

            dark:via-traga-cyan/40
          "
        />

        {/* DECORATIVE ORB */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -right-20
            h-44
            w-44
            rounded-full
            bg-traga-blue/5
            blur-2xl

            dark:bg-traga-cyan/5
          "
        />
      </motion.article>
    </motion.div>
  )
}

function WhyChooseUs() {
  return (
    <section
      className="
        relative
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
      <div
        className="
          mx-auto
          max-w-7xl
          px-6

          lg:px-8
        "
      >
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
            Mengapa TRAGAtrans?
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
            Perjalanan lebih nyaman,
            <span
              className="
                block
                text-traga-blue

                dark:text-traga-cyan
              "
            >
              dari awal hingga tujuan.
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
            Kami menghadirkan layanan transportasi
            yang fleksibel untuk kebutuhan perjalanan,
            wisata, maupun bisnis Anda.
          </p>
        </div>

        {/* 3D CARDS */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2
            lg:mt-16
          "
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
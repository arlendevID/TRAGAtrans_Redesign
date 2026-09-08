import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import rentalImage from "../../../assets/services/service-rental.webp"
import tourImage from "../../../assets/services/service-tour.webp"
import airportImage from "../../../assets/services/service-airport.webp"
import businessImage from "../../../assets/services/service-business.webp"

const services = [
  {
    id: 1,
    title: "Sewa Mobil",
    subtitle: "Rental Mobil Yogyakarta",
    description:
      "Pilihan armada lengkap untuk kebutuhan perjalanan pribadi, keluarga, wisata, maupun rombongan selama berada di Yogyakarta.",
    image: rentalImage,
  },
  {
    id: 2,
    title: "Paket Wisata",
    subtitle: "Private Trip Dan Open Trip",
    description:
      "Nikmati perjalanan wisata Jogja dengan pilihan destinasi menarik dan perjalanan yang lebih fleksibel bersama TRAGAtrans.",
    image: tourImage,
  },
  {
    id: 3,
    title: "Antar Jemput Bandara",
    subtitle: "Airport Transfer",
    description:
      "Layanan antar jemput dari dan menuju bandara dengan kendaraan nyaman serta jadwal penjemputan yang dapat disesuaikan.",
    image: airportImage,
  },
  {
    id: 4,
    title: "Perjalanan Dinas",
    subtitle: "Business Transportation",
    description:
      "Transportasi profesional untuk kunjungan kerja, meeting, perjalanan instansi, event perusahaan, dan kebutuhan operasional lainnya.",
    image: businessImage,
  },
]

const imageVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 110 : -110,
    y: 20,
    scale: 0.94,
    rotate: direction > 0 ? 4 : -4,
    filter: "blur(8px)",
  }),

  center: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 22,
      mass: 0.9,
    },
  },

  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -110 : 110,
    y: -15,
    scale: 0.95,
    rotate: direction > 0 ? -4 : 4,
    filter: "blur(6px)",
    transition: {
      duration: 0.3,
    },
  }),
}

function ServiceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const activeService = services[activeIndex]

  const previousService = () => {
    setDirection(-1)

    setActiveIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    )
  }

  const nextService = () => {
    setDirection(1)

    setActiveIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    )
  }

  const getStackImage = (offset) => {
    const index =
      (activeIndex + offset + services.length) %
      services.length

    return services[index].image
  }

  return (
    <section
      className="
        overflow-hidden
        bg-white
        py-20
        transition-colors duration-500
        dark:bg-[#020817]
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-14
          px-6
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-20
          lg:px-8
        "
      >
        {/* STACK IMAGE */}
        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="relative aspect-[1459/972] w-full">

            {/* CARD BELAKANG 2 */}
            <motion.div
              animate={{
                rotate: 5,
                x: 28,
                y: 18,
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 20,
              }}
              className="
                absolute inset-0
                overflow-hidden
                rounded-[2rem]
                shadow-xl
                opacity-55
              "
            >
              <img
                src={getStackImage(2)}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* CARD BELAKANG 1 */}
            <motion.div
              animate={{
                rotate: -5,
                x: -22,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              className="
                absolute inset-0
                overflow-hidden
                rounded-[2rem]
                shadow-xl
                opacity-75
              "
            >
              <img
                src={getStackImage(1)}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* GAMBAR UTAMA */}
            <AnimatePresence
              initial={false}
              custom={direction}
            >
              <motion.div
                key={activeService.id}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="
                  absolute inset-0 z-10
                  overflow-hidden
                  rounded-[2rem]
                  border border-black/5
                  shadow-2xl
                  dark:border-white/10
                "
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="
                    h-full w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/15
                    via-transparent
                    to-transparent
                  "
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex min-h-[360px] flex-col justify-between">

          <AnimatePresence initial={false}>
            <motion.div
              key={activeService.id}
              initial={{
                opacity: 0,
                x: direction > 0 ? 30 : -30,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -25 : 25,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span
                className="
                  mb-4 inline-block
                  text-sm font-semibold
                  text-traga-blue
                  dark:text-traga-cyan
                "
              >
                Layanan TRAGAtrans
              </span>

              <h2
                className="
                  text-3xl font-bold
                  tracking-tight
                  text-black
                  dark:text-white
                  sm:text-4xl
                "
              >
                {activeService.title}
              </h2>

              <p
                className="
                  mt-2
                  text-lg font-medium
                  text-black/75
                  dark:text-white/75
                "
              >
                {activeService.subtitle}
              </p>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-base
                  leading-7
                  text-black/60
                  dark:text-white/60
                "
              >
                {activeService.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CONTROL */}
          <div className="mt-10 flex items-center gap-10">
            <button
              onClick={previousService}
              className="
                font-semibold
                text-black
                transition-all
                hover:-translate-x-1
                hover:text-traga-blue
                dark:text-white
                dark:hover:text-traga-cyan
              "
            >
              ← Sebelumnya
            </button>

            <button
              onClick={nextService}
              className="
                font-semibold
                text-black
                transition-all
                hover:translate-x-1
                hover:text-traga-blue
                dark:text-white
                dark:hover:text-traga-cyan
              "
            >
              Selanjutnya →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase
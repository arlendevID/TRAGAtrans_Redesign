import { useState } from "react"
import { motion } from "framer-motion"

import agyaImage from "../../../assets/cars/agya.webp"
import avanzaImage from "../../../assets/cars/avanza.webp"
import brioImage from "../../../assets/cars/brio.webp"
import wrvImage from "../../../assets/cars/wrv.webp"
import innovaImage from "../../../assets/cars/innova-reborn.webp"
import hiaceImage from "../../../assets/cars/hiace-premio.webp"
import alphardImage from "../../../assets/cars/alphard.webp"

const featuredCars = [
  {
    id: 1,
    name: "Toyota Agya",
    rentalType: "Lepas Kunci",
    price: "Rp 300.000 / hari",
    capacity: "4-5 Pax",
    transmission: "A/T Dan M/T",
    image: agyaImage,
  },
  {
    id: 2,
    name: "Toyota Avanza",
    rentalType: "Lepas Kunci",
    price: "Rp 375.000 / hari",
    capacity: "6-7 Pax",
    transmission: "A/T",
    image: avanzaImage,
  },
  {
    id: 3,
    name: "Honda Brio",
    rentalType: "Lepas Kunci",
    price: "Rp 300.000 / hari",
    capacity: "4-5 Pax",
    transmission: "A/T",
    image: brioImage,
  },
  {
    id: 4,
    name: "Honda WR-V",
    rentalType: "Lepas Kunci",
    price: "Rp 375.000 / hari",
    capacity: "4-5 Pax",
    transmission: "A/T",
    image: wrvImage,
  },
  {
    id: 5,
    name: "Toyota Innova Reborn",
    rentalType: "All In Driver + BBM",
    price: "Rp 550.000 / hari",
    capacity: "6 Pax",
    transmission: "A/T",
    image: innovaImage,
  },
  {
    id: 6,
    name: "Toyota HiAce Premio",
    rentalType: "All In Driver + BBM",
    price: "Rp 1.400.000 / hari",
    capacity: "14 Pax",
    transmission: "M/T",
    image: hiaceImage,
  },
  {
    id: 7,
    name: "Toyota Alphard",
    rentalType: "All In Driver + BBM",
    price: "Rp 3.280.000 / hari",
    capacity: "5 Pax",
    transmission: "A/T",
    image: alphardImage,
  },
]

function FleetShowcase() {
  const [activeIndex, setActiveIndex] = useState(3)

  const activeCar = featuredCars[activeIndex]

  const previous = () => {
    setActiveIndex((prev) =>
      prev === 0 ? featuredCars.length - 1 : prev - 1
    )
  }

  const next = () => {
    setActiveIndex((prev) =>
      prev === featuredCars.length - 1 ? 0 : prev + 1
    )
  }

  const getOffset = (index) => {
    let offset = index - activeIndex

    if (offset > featuredCars.length / 2) {
      offset -= featuredCars.length
    }

    if (offset < -featuredCars.length / 2) {
      offset += featuredCars.length
    }

    return offset
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
      {/* HEADER */}
      <div className="mx-auto mb-14 max-w-7xl px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold text-traga-blue dark:text-traga-cyan">
          Armada TRAGAtrans
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-traga-navy dark:text-white sm:text-4xl">
          Pilih armada sesuai perjalananmu
        </h2>

        <p className="mt-4 max-w-2xl text-black/60 dark:text-white/60">
          Dari kendaraan city car hingga kendaraan premium untuk perjalanan
          pribadi, keluarga, maupun rombongan.
        </p>
      </div>

      {/* COVERFLOW */}
      <div className="relative mx-auto h-[330px] w-full sm:h-[410px]">
        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
          {featuredCars.map((car, index) => {
            const offset = getOffset(index)
            const isActive = offset === 0

            return (
              <motion.button
                key={car.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: offset * 205,
                  y: Math.abs(offset) * 8,
                  scale: isActive
                    ? 1
                    : Math.max(0.72, 1 - Math.abs(offset) * 0.08),
                  rotateY: offset * -10,
                  rotateZ: offset * 1.5,
                  opacity:
                    Math.abs(offset) > 3
                      ? 0
                      : Math.max(0.45, 1 - Math.abs(offset) * 0.15),
                  zIndex: 20 - Math.abs(offset),
                }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 22,
                  mass: 0.8,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[230px]
                  w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[1.8rem]
                  border border-black/5
                  bg-white
                  shadow-2xl

                  sm:h-[300px]
                  sm:w-[400px]

                  dark:border-white/10
                  dark:bg-white/5
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                {isActive && (
                  <div
                    className="
                      absolute inset-x-0 bottom-0
                      bg-gradient-to-t
                      from-black/55
                      via-black/15
                      to-transparent
                      px-6 pb-5 pt-16
                      text-left text-white
                    "
                  >
                    <p className="text-lg font-semibold">
                      {car.name}
                    </p>

                    <p className="text-sm text-white/75">
                      {car.rentalType}
                    </p>
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* ACTIVE CAR INFO */}
      <motion.div
        key={activeCar.id}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          mx-auto
          mt-8
          max-w-xl
          px-6
          text-center
        "
      >
        <h3 className="text-xl font-bold text-black dark:text-white">
          {activeCar.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-traga-blue dark:text-traga-cyan">
          {activeCar.rentalType}
        </p>

        <div
          className="
            mx-auto
            mt-7
            grid
            max-w-lg
            grid-cols-3
            divide-x
            divide-black/10
            dark:divide-white/10
          "
        >
          <CarInfo
            label="Harga"
            value={activeCar.price}
          />

          <CarInfo
            label="Kapasitas"
            value={activeCar.capacity}
          />

          <CarInfo
            label="Transmisi"
            value={activeCar.transmission}
          />
        </div>

        {/* CONTROLS */}
        <div className="mt-8 flex items-center justify-center gap-10">
          <button
            onClick={previous}
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
            onClick={next}
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
      </motion.div>
    </section>
  )
}

function CarInfo({ label, value }) {
  return (
    <div className="px-2 sm:px-5">
      <p className="text-xs text-black/45 dark:text-white/45">
        {label}
      </p>

      <p className="mt-2 text-xs font-semibold text-black dark:text-white sm:text-sm">
        {value}
      </p>
    </div>
  )
}

export default FleetShowcase
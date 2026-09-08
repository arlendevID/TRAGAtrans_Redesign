import { privateTripsData } from "../../../data/tours"

import diengImage from "../../../assets/tours/dieng.webp"
import hiddenNatureImage from "../../../assets/tours/hidden-nature.webp"
import familyFunImage from "../../../assets/tours/family-fun.webp"
import romanticImage from "../../../assets/tours/romantic.webp"
import greenViewImage from "../../../assets/tours/green-view.webp"
import gunungkidulImage from "../../../assets/tours/gunungkidul.webp"

const tourImages = {
  "dieng-sunrise-nature-tour": diengImage,
  "jogja-hidden-nature-tour": hiddenNatureImage,
  "jogja-family-fun-tour": familyFunImage,
  "jogja-romantic-escape": romanticImage,
  "jogja-green-view": greenViewImage,
  "gunungkidul-beach-tour": gunungkidulImage,
}

function PrivateTripStack() {
  const tours = privateTripsData.map((tour) => ({
    ...tour,
    image: tourImages[tour.slug],
  }))

  return (
    <section
      className="
        bg-white
        py-20
        transition-colors
        duration-500

        dark:bg-[#020817]

        sm:py-24
        lg:py-28
      "
    >
      {/* HEADER */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            Private Trip TRAGAtrans
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
            Pilih perjalanan terbaikmu
          </h2>

          <p
            className="
              mt-4
              leading-7
              text-black/60

              dark:text-white/60
            "
          >
            Temukan berbagai pilihan perjalanan private untuk
            menjelajahi Jogja, Dieng, dan destinasi menarik lainnya
            bersama TRAGAtrans.
          </p>
        </div>
      </div>

      {/* STACK CARDS */}
      <div
        className="
          mx-auto
          mt-16
          max-w-6xl
          px-4

          sm:px-6
          lg:px-8
        "
      >
        <div className="relative pb-[35vh]">

          {tours.map((tour, index) => {
            const number = String(index + 1).padStart(2, "0")

            return (
              <article
                key={tour.id}
                className="
                  sticky
                  top-[var(--stack-mobile)]
                  mb-14
                  overflow-hidden
                  rounded-[28px]

                  border border-black/10
                  bg-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]

                  md:top-[var(--stack-desktop)]

                  dark:border-white/10
                  dark:bg-[#07132d]
                  dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
                style={{
                  "--stack-mobile": `${92 + index * 8}px`,
                  "--stack-desktop": `${112 + index * 12}px`,
                  zIndex: 10 + index,
                }}
              >
                <div
                  className="
                    grid
                    grid-cols-1

                    md:min-h-[380px]
                    md:grid-cols-[43%_57%]
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      min-h-[240px]
                      overflow-hidden

                      sm:min-h-[300px]
                      md:min-h-[380px]
                    "
                  >
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/20
                        via-transparent
                        to-transparent
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      min-w-0
                      flex-col
                      justify-between
                      p-6

                      sm:p-8
                      lg:p-10
                    "
                  >
                    <div>
                      {/* META */}
                      <div
                        className="
                          mb-8
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        <span
                          className="
                            rounded-full
                            bg-traga-blue/10
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-traga-blue

                            dark:bg-traga-cyan/10
                            dark:text-traga-cyan
                          "
                        >
                          Private Trip
                        </span>

                        <span
                          className="
                            text-sm
                            font-medium
                            text-black/35

                            dark:text-white/35
                          "
                        >
                          {number}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3
                        className="
                          max-w-xl
                          text-2xl
                          font-bold
                          leading-tight
                          tracking-tight
                          text-traga-navy

                          dark:text-white

                          sm:text-3xl
                        "
                      >
                        {tour.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-5
                          max-w-xl
                          text-sm
                          leading-7
                          text-black/60

                          dark:text-white/60

                          sm:text-base
                        "
                      >
                        {tour.shortDescription}
                      </p>
                    </div>

                    <div
                      className="
                        mt-10
                        flex
                        items-center
                        justify-between
                        border-t
                        border-black/10
                        pt-5

                        dark:border-white/10
                      "
                    >
                      <span
                        className="
                          text-xs
                          font-medium
                          text-black/40

                          dark:text-white/40
                        "
                      >
                        TRAGAtrans Yogyakarta
                      </span>

                      <span
                        className="
                          text-sm
                          font-semibold
                          text-traga-blue

                          dark:text-traga-cyan
                        "
                      >
                        Explore
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default PrivateTripStack
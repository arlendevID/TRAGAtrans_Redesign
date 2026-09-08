import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { siteAvailability } from "../../config/siteAvailability"

function DevelopmentGuard() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!siteAvailability.developmentGuard) return

    const handleClick = (event) => {
      const target = event.target.closest("a, [data-guard-path]")

if (!target) return

const href =
  target.getAttribute("href") ||
  target.getAttribute("data-guard-path")

if (!href) return

      // IZINKAN anchor
      if (href.startsWith("#")) return

      // IZINKAN WhatsApp, email, telepon
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.includes("wa.me") ||
        href.includes("whatsapp.com")
      ) {
        return
      }

      // IZINKAN website eksternal
      try {
        const url = new URL(href, window.location.origin)

        if (url.origin !== window.location.origin) {
          return
        }

        const path = url.pathname

        // IZINKAN halaman yang sudah tersedia
        if (siteAvailability.availablePaths.includes(path)) {
          return
        }

        // BLOK halaman yang belum selesai
        event.preventDefault()
        setIsOpen(true)
      } catch {
        return
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false)
            }
          }}
          className="
            fixed inset-0 z-[99999]
            flex items-center justify-center
            bg-traga-navy/50
            px-5
            backdrop-blur-md
          "
        >
          <div
            className="w-full max-w-md"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                rotateX: 25,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                rotateX: -15,
                y: 30,
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
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/20
                bg-white
                p-8
                text-center
                shadow-[0_30px_100px_rgba(3,25,82,0.35)]

                dark:border-white/10
                dark:bg-[#07132d]
              "
            >
              {/* GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute -right-20 -top-20
                  h-52 w-52
                  rounded-full
                  bg-traga-cyan/20
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute -bottom-20 -left-20
                  h-52 w-52
                  rounded-full
                  bg-trans-yellow/15
                  blur-3xl
                "
              />

              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="
                  absolute right-5 top-5 z-20
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  bg-black/5
                  text-xl
                  text-traga-navy
                  transition
                  hover:bg-black/10

                  dark:bg-white/5
                  dark:text-white
                "
              >
                ×
              </button>

              <div
                className="relative z-10"
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                <div
                  className="
                    mx-auto
                    flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    bg-traga-blue/10
                    text-3xl
                  "
                >
                  🚧
                </div>

                <p
                  className="
                    mt-6
                    text-xs font-bold
                    uppercase
                    tracking-[0.18em]
                    text-traga-blue

                    dark:text-traga-cyan
                  "
                >
                  TRAGAtrans
                </p>

                <h2
                  className="
                    mt-3
                    text-2xl font-bold
                    text-traga-navy

                    dark:text-white
                  "
                >
                  Halaman Sedang Dalam Pengerjaan
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-black/55

                    dark:text-white/55
                  "
                >
                  Fitur dan halaman ini sedang kami persiapkan agar dapat
                  memberikan pengalaman terbaik untuk Anda.
                </p>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-7
                    rounded-full
                    bg-trans-yellow
                    px-7 py-3
                    text-sm font-bold
                    text-traga-navy
                    transition

                    hover:bg-trans-orange
                  "
                >
                  Kembali ke Beranda
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DevelopmentGuard
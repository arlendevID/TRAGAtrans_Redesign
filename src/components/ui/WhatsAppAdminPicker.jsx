import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"

import { siteData } from "../../data/siteData"
import { createWhatsAppLink } from "../../utils/whatsapp"

function WhatsAppAdminPicker({
  children = "Hubungi WhatsApp",
  template = "general",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false)

  const admins = siteData.contact.whatsapp || []

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const handleAdminClick = (admin) => {
    const url = createWhatsAppLink(admin.number, template)

    window.open(url, "_blank", "noopener,noreferrer")

    setIsOpen(false)
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className={className}
      >
        {children}
      </motion.button>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setIsOpen(false)
                }
              }}
              className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center

                bg-traga-navy/45
                px-5

                backdrop-blur-md
              "
            >
              <div
                className="w-full max-w-md"
                style={{
                  perspective: "1200px",
                }}
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
                    stiffness: 230,
                    damping: 22,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="
                    relative
                    overflow-hidden

                    rounded-[32px]

                    border
                    border-white/20

                    bg-white/95

                    p-6

                    shadow-[0_30px_100px_rgba(3,25,82,0.35)]

                    backdrop-blur-2xl

                    dark:border-white/10
                    dark:bg-[#07132d]/95

                    sm:p-8
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20

                      h-52
                      w-52

                      rounded-full
                      bg-traga-cyan/20
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-24
                      -left-20

                      h-52
                      w-52

                      rounded-full
                      bg-trans-yellow/15
                      blur-3xl
                    "
                  />

                  {/* Close */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="
                      absolute
                      right-5
                      top-5
                      z-20

                      flex
                      h-9
                      w-9

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-black/10

                      bg-black/5

                      text-lg
                      text-traga-navy

                      transition

                      hover:bg-black/10

                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-white
                      dark:hover:bg-white/10
                    "
                  >
                    ×
                  </button>

                  {/* Header */}
                  <div
                    className="relative z-10"
                    style={{
                      transform: "translateZ(40px)",
                    }}
                  >
                    <span
                      className="
                        inline-flex

                        rounded-full

                        bg-traga-blue/10

                        px-3
                        py-1.5

                        text-xs
                        font-semibold

                        text-traga-blue

                        dark:bg-traga-cyan/10
                        dark:text-traga-cyan
                      "
                    >
                      WhatsApp TRAGAtrans
                    </span>

                    <h2
                      className="
                        mt-4

                        text-2xl
                        font-bold

                        text-traga-navy

                        dark:text-white
                      "
                    >
                      Pilih Admin
                    </h2>

                    <p
                      className="
                        mt-2

                        text-sm
                        leading-6

                        text-black/55

                        dark:text-white/55
                      "
                    >
                      Pilih salah satu admin untuk melanjutkan konsultasi atau
                      pemesanan.
                    </p>
                  </div>

                  {/* Admin */}
                  <div className="relative z-10 mt-6 space-y-3">
                    {admins.map((admin, index) => (
                      <motion.button
                        key={admin.number}
                        type="button"
                        onClick={() => handleAdminClick(admin)}
                        whileHover={{
                          y: -5,
                          rotateX: -4,
                          rotateY: index === 0 ? 5 : -5,
                          scale: 1.015,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 20,
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                        className="
                          group

                          flex
                          w-full

                          items-center
                          justify-between

                          rounded-[22px]

                          border
                          border-black/10

                          bg-white

                          p-4

                          text-left

                          shadow-sm

                          transition-colors

                          hover:border-traga-blue/30
                          hover:bg-traga-blue/[0.03]

                          dark:border-white/10
                          dark:bg-white/[0.04]
                          dark:hover:border-traga-cyan/30
                          dark:hover:bg-white/[0.07]
                        "
                      >
                        <div
                          className="flex items-center gap-4"
                          style={{
                            transform: "translateZ(35px)",
                          }}
                        >
                          <div
                            className="
                              flex
                              h-12
                              w-12

                              shrink-0

                              items-center
                              justify-center

                              rounded-2xl

                              bg-[#25D366]

                              text-lg
                              font-black
                              text-white

                              shadow-lg
                            "
                          >
                            WA
                          </div>

                          <div>
                            <h3
                              className="
                                font-bold
                                text-traga-navy

                                dark:text-white
                              "
                            >
                              {admin.label || `Admin ${index + 1}`}
                            </h3>

                            <p
                              className="
                                mt-0.5

                                text-sm

                                text-black/50

                                dark:text-white/50
                              "
                            >
                              {admin.display || admin.number}
                            </p>
                          </div>
                        </div>

                        <span
                          className="
                            text-xl

                            text-traga-blue

                            transition-transform
                            duration-300

                            group-hover:translate-x-1

                            dark:text-traga-cyan
                          "
                          style={{
                            transform: "translateZ(50px)",
                          }}
                        >
                          →
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  <p
                    className="
                      relative
                      z-10

                      mt-5

                      text-center
                      text-xs

                      text-black/40

                      dark:text-white/40
                    "
                  >
                    Pesan WhatsApp akan otomatis terisi dengan form pemesanan.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default WhatsAppAdminPicker
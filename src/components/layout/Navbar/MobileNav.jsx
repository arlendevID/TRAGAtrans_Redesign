import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { navigationData } from "../../../data/navigation"

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (label) => {
    setOpenDropdown((current) =>
      current === label ? null : label
    )
  }

  return (
    <div className="fixed left-4 right-4 top-4 z-[100] md:hidden">
      <div
        className="
          rounded-[24px]
          border border-black/10
          bg-white/85
          shadow-lg
          backdrop-blur-xl

          dark:border-white/10
          dark:bg-[#07132d]/85
        "
      >
        <div className="flex items-center justify-between px-5 py-4">
          <a
            href="/"
            className="text-lg font-black text-traga-navy dark:text-white"
          >
            TRAGA
            <span className="text-traga-blue dark:text-traga-cyan">
              trans
            </span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-black/5
              text-xl
              text-traga-navy

              dark:bg-white/5
              dark:text-white
            "
            aria-label="Buka navigasi"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <nav className="border-t border-black/10 px-3 pb-4 pt-3 dark:border-white/10">
                {navigationData.map((item) => {
                  const hasChildren =
                    item.children && item.children.length > 0

                  if (!hasChildren) {
                    return (
                      <a
                        key={item.label}
                        href={item.path}
                        className="
                          block rounded-xl
                          px-4 py-3
                          text-sm font-semibold
                          text-traga-navy
                          transition

                          hover:bg-traga-blue/5

                          dark:text-white
                          dark:hover:bg-white/5
                        "
                      >
                        {item.label}
                      </a>
                    )
                  }

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className="
                          flex w-full
                          items-center justify-between
                          rounded-xl
                          px-4 py-3
                          text-left
                          text-sm font-semibold
                          text-traga-navy

                          hover:bg-traga-blue/5

                          dark:text-white
                          dark:hover:bg-white/5
                        "
                      >
                        {item.label}

                        <motion.span
                          animate={{
                            rotate:
                              openDropdown === item.label ? 180 : 0,
                          }}
                        >
                          ▾
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                            }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.path}
                                className="
                                  block rounded-xl
                                  px-4 py-3
                                  text-sm
                                  text-black/60

                                  hover:bg-traga-blue/5
                                  hover:text-traga-blue

                                  dark:text-white/60
                                  dark:hover:bg-white/5
                                  dark:hover:text-traga-cyan
                                "
                              >
                                {child.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MobileNav
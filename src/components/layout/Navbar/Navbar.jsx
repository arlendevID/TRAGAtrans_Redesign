import { useState } from "react"
import { motion } from "framer-motion"

import { navigationData } from "../../../data/navigation"

import NavDropdown from "./NavDropdown"
import MobileNav from "./MobileNav"

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  const currentPath = window.location.pathname

  const isItemActive = (item) => {
    if (item.children?.length) {
      return item.children.some(
        (child) => currentPath === child.path
      )
    }

    return currentPath === item.path
  }

  return (
    <>
      <MobileNav />

      <header className="fixed left-0 right-0 top-6 z-[100] hidden md:block">
        <div className="mx-auto flex max-w-7xl justify-center px-6">
          <nav
            onMouseLeave={() => {
              setHoveredItem(null)
              setOpenDropdown(null)
            }}
            className="
              flex
              items-center
              rounded-full

              border
              border-black/10

              bg-white/80

              p-2

              shadow-[0_12px_35px_rgba(3,25,82,0.12)]

              backdrop-blur-xl

              dark:border-white/10
              dark:bg-[#07132d]/80
            "
          >
            {navigationData.map((item) => {
              const hasChildren =
                item.children && item.children.length > 0

              const active = isItemActive(item)
              const hovered = hoveredItem === item.label

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredItem(item.label)

                    if (hasChildren) {
                      setOpenDropdown(item.label)
                    } else {
                      setOpenDropdown(null)
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) {
                      setOpenDropdown(null)
                    }
                  }}
                >
                  {/* ACTIVE BUBBLE */}
                  {active && (
                    <motion.span
                      layoutId="navbar-active-bubble"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-0

                        rounded-full

                        bg-traga-blue/10

                        shadow-[inset_0_0_0_1px_rgba(7,130,220,0.12)]

                        dark:bg-traga-cyan/10
                        dark:shadow-[inset_0_0_0_1px_rgba(24,181,244,0.15)]
                      "
                    />
                  )}

                  {/* LIQUID HOVER BUBBLE */}
                  {hovered && (
                    <motion.span
                      layoutId="navbar-liquid-hover"
                      initial={{
                        opacity: 0,
                        scale: 0.75,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 28,
                        mass: 0.7,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-0

                        overflow-hidden

                        rounded-full

                        border
                        border-traga-blue/15

                        bg-traga-blue/[0.08]

                        shadow-[
                          0_6px_20px_rgba(7,130,220,0.10),
                          inset_0_1px_0_rgba(255,255,255,0.7)
                        ]

                        backdrop-blur-md

                        dark:border-traga-cyan/20
                        dark:bg-traga-cyan/[0.10]
                      "
                    >
                      {/* LIQUID GLOW */}
                      <motion.span
                        animate={{
                          x: ["-50%", "70%", "-50%"],
                          opacity: [0.25, 0.55, 0.25],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          absolute
                          -top-3
                          h-[160%]
                          w-1/2

                          rotate-12

                          rounded-full

                          bg-white/40

                          blur-xl

                          dark:bg-traga-cyan/20
                        "
                      />
                    </motion.span>
                  )}

                  {/* DROPDOWN PARENT */}
                  {hasChildren ? (
                    <>
                      <motion.button
                        type="button"
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="
                          relative
                          z-10

                          flex
                          items-center
                          gap-1

                          rounded-full

                          px-4
                          py-3

                          text-sm
                          font-semibold

                          text-traga-navy

                          dark:text-white
                        "
                      >
                        {item.label}

                        <motion.span
                          animate={{
                            rotate:
                              openDropdown === item.label
                                ? 180
                                : 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="text-[10px]"
                        >
                          ▼
                        </motion.span>
                      </motion.button>

                      <NavDropdown
                        item={item}
                        isOpen={
                          openDropdown === item.label
                        }
                      />
                    </>
                  ) : (
                    /* NORMAL LINK */
                    <motion.a
                      href={item.path}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className={`
                        relative
                        z-10

                        block

                        rounded-full

                        px-4
                        py-3

                        text-sm
                        font-semibold

                        transition-colors

                        ${
                          active
                            ? "text-traga-blue dark:text-traga-cyan"
                            : "text-traga-navy dark:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </motion.a>
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
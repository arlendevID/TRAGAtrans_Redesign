import { AnimatePresence, motion } from "framer-motion"

function NavDropdown({ item, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.18 }}
          className="
            absolute left-1/2 top-full z-50
            mt-3 min-w-[220px] -translate-x-1/2
            rounded-2xl border border-black/10
            bg-white/95 p-2
            shadow-xl backdrop-blur-xl

            dark:border-white/10
            dark:bg-[#07132d]/95
          "
        >
          {item.children?.map((child) => (
            <a
              key={child.label}
              href={child.path}
              className="
                block rounded-xl px-4 py-3
                text-sm font-medium
                text-traga-navy
                transition

                hover:bg-traga-blue/5
                hover:text-traga-blue

                dark:text-white
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
  )
}

export default NavDropdown
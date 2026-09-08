import { motion } from "framer-motion"
import { createWhatsAppLink } from "../../utils/whatsapp"

function WhatsAppButton({
  number,
  template = "general",
  children,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-trans-yellow text-traga-navy hover:bg-trans-orange",

    secondary:
      "border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl",

    blue:
      "bg-traga-blue text-white hover:bg-traga-deep-blue",

    outline:
      "border border-traga-blue/20 bg-white text-traga-navy hover:bg-traga-blue/5 dark:border-white/15 dark:bg-white/5 dark:text-white",
  }

  return (
    <motion.a
      href={createWhatsAppLink(number, template)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-6
        py-3.5
        text-sm
        font-bold
        transition-colors
        duration-300

        ${variants[variant] || variants.primary}
        ${className}
      `}
    >
      {children}
    </motion.a>
  )
}

export default WhatsAppButton
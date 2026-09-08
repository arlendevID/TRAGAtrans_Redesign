import { motion } from "framer-motion"
import heroImage from "../../../assets/hero-main.webp"

function HeroCollage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        rotateY: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateY: 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        rotateY: -2,
        rotateX: 2,
      }}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-[620px]
      "
    >
      {/* GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-8
          rounded-[40px]
          bg-gradient-to-br
          from-traga-cyan/15
          via-transparent
          to-trans-yellow/10
          blur-3xl
        "
      />

      {/* IMAGE CARD */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]

          border
          border-black/5

          bg-white

          shadow-[0_30px_80px_rgba(3,25,82,0.18)]

          dark:border-white/10
          dark:bg-[#07132d]
          dark:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        "
      >
        <img
          src={heroImage}
          alt="TRAGAtrans Yogyakarta"
          className="
            block
            aspect-[1402/1122]
            h-auto
            w-full
            object-cover
          "
        />
      </div>
    </motion.div>
  )
}

export default HeroCollage
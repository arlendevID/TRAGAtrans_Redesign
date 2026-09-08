import { useEffect, useState } from "react"
import WhatsAppAdminPicker from "../../ui/WhatsAppAdminPicker"

const footerLinks = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Sewa Mobil",
    href: "/sewa-mobil",
  },
  {
    label: "Paket Wisata",
    href: "/paket-wisata/private-trip",
  },
  {
    label: "Layanan",
    href: "/layanan/antar-jemput-bandara",
  },
  {
    label: "Lainnya",
    href: "/galeri",
  },
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
  },
]

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/transportasijogja_traga?stkn=MXZhaTAwdjFob29rbw==",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@sewa.mobil.yogyakarta?_r=1&_t=ZS-99XTaMQZT1O",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M15 4v10.5a4.5 4.5 0 1 1-4.5-4.5" />
        <path d="M15 4c.7 2.2 2.2 3.7 4.5 4.4" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@transportasijogja_traga?igshid=NTc4MTIwNjQ2YQ==",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 12.5c.5-3 6.5-3.2 7-.3.5 3-4 4-5.3 2.2-1.1-1.5.5-3.4 3.2-3.1 2.2.2 3.4 1.6 3.4 3.8" />
      </svg>
    ),
  },
  {
    name: "Google Maps",
    href: "https://maps.app.goo.gl/KbCnYzTFbs5C3BxS8",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
]

function Footer() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("traga-theme")
    const dark = savedTheme === "dark"

    setIsDark(dark)
    document.documentElement.classList.toggle("dark", dark)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark

    setIsDark(nextTheme)

    document.documentElement.classList.toggle("dark", nextTheme)

    localStorage.setItem(
      "traga-theme",
      nextTheme ? "dark" : "light"
    )
  }

  return (
    <footer
      className="
        border-t border-black/10
        bg-white
        transition-colors
        duration-500

        dark:border-white/10
        dark:bg-[#020817]
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <a
              href="/"
              className="
                inline-flex
                items-center
                text-3xl
                font-black
                tracking-tight
                text-black

                dark:text-white
              "
            >
              TRAGA
              <span className="text-traga-blue dark:text-traga-cyan">
                trans
              </span>
            </a>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-7
                text-black/55

                dark:text-white/55
              "
            >
              Perjalanan Nyaman, Jelajahi Jogja Tanpa Batas.
            </p>

            <div className="mt-6">
              <WhatsAppAdminPicker
                template="general"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-full

                  bg-trans-yellow

                  px-5
                  py-3

                  text-sm
                  font-bold

                  text-traga-navy

                  shadow-sm

                  transition-colors

                  hover:bg-trans-orange
                "
              >
                Hubungi Kami!
              </WhatsAppAdminPicker>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3
              className="
                text-base
                font-bold
                text-black

                dark:text-white
              "
            >
              Layanan Kami
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    w-fit
                    text-sm
                    text-black/55
                    transition-colors

                    hover:text-traga-blue

                    dark:text-white/55
                    dark:hover:text-traga-cyan
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="
                text-base
                font-bold
                text-black

                dark:text-white
              "
            >
              Kontak Kami
            </h3>

            <div
              className="
                mt-6
                space-y-3
                text-sm
                leading-6
                text-black/55

                dark:text-white/55
              "
            >
              <p>
                Jl. Madumurti Gg. Saron, Soboman,
                Sanggrahan, Ngestiharjo, Kec. Kasihan,
                Kab. Bantul, Daerah Istimewa Yogyakarta
              </p>

              <a
                href="mailto:tragatransjogja@gmail.com"
                className="
                  block
                  transition-colors
                  hover:text-traga-blue

                  dark:hover:text-traga-cyan
                "
              >
                tragatransjogja@gmail.com
              </a>

              <p>Admin 1: 0821-3773-5609</p>

              <p>Admin 2: 0877-6900-2129</p>

              <p>Operasional: 24 Jam</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3
              className="
                text-base
                font-bold
                text-black

                dark:text-white
              "
            >
              Ikuti Kami
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-black/10

                    bg-black/[0.02]

                    text-black/70

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-traga-blue/30
                    hover:text-traga-blue

                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-white/70

                    dark:hover:border-traga-cyan/30
                    dark:hover:text-traga-cyan
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* THEME TOGGLE */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-lg">
                ☀️
              </span>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Ganti tema"
                className={`
                  relative
                  h-7
                  w-12

                  rounded-full

                  transition-colors
                  duration-300

                  ${
                    isDark
                      ? "bg-traga-blue"
                      : "bg-black/10"
                  }
                `}
              >
                <span
                  className={`
                    absolute
                    top-1

                    h-5
                    w-5

                    rounded-full

                    bg-white

                    shadow

                    transition-all
                    duration-300

                    ${
                      isDark
                        ? "left-6"
                        : "left-1"
                    }
                  `}
                />
              </button>

              <span className="text-lg">
                🌙
              </span>

              <span
                className="
                  ml-1
                  text-xs
                  text-black/45

                  dark:text-white/45
                "
              >
                {isDark ? "Dark" : "Light"}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-14

            flex
            flex-col
            gap-4

            border-t
            border-black/10

            pt-8

            text-sm
            text-black/45

            dark:border-white/10
            dark:text-white/40

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © 2026 TRAGAtrans. All rights reserved.
          </p>

          <p>
            Dikelola IT TRAGAtrans
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
export const navigationData = [
  {
    id: 1,
    label: "Beranda",
    path: "/",
  },
  {
    id: 2,
    label: "Sewa Mobil",
    path: "/sewa-mobil",
  },
  {
    id: 3,
    label: "Paket Wisata",
    children: [
      {
        label: "Private Trip",
        path: "/paket-wisata/private-trip",
      },
      {
        label: "Open Trip",
        path: "/paket-wisata/open-trip",
      },
    ],
  },
  {
    id: 4,
    label: "Layanan",
    children: [
      {
        label: "Antar Jemput Bandara",
        path: "/layanan/antar-jemput-bandara",
      },
      {
        label: "Perjalanan Dinas",
        path: "/layanan/perjalanan-dinas",
      },
    ],
  },
  {
    id: 5,
    label: "Lainnya",
    children: [
      {
        label: "Galeri Perjalanan",
        path: "/galeri",
      },
      {
        label: "Testimoni",
        path: "/testimoni",
      },
      {
        label: "Artikel & Tips Wisata",
        path: "/artikel",
      },
      {
        label: "Kontak Kami",
        path: "/kontak",
      },
    ],
  },
  {
    id: 6,
    label: "Tentang Kami",
    path: "/tentang-kami",
  },
];
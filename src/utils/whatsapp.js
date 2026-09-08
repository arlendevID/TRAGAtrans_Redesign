export const whatsappTemplates = {
  general: `Halo Admin TRAGAtrans 

Saya ingin melakukan pemesanan/konsultasi.

Nama:
Layanan:
Tanggal Perjalanan:
Jumlah Penumpang:
Tujuan:
Lokasi Penjemputan / Pengantaran:
Pilihan Armada:
Catatan Tambahan:

Mohon informasi ketersediaan dan harganya. Terima kasih `,

  carRental: `Halo Admin TRAGAtrans 

Saya ingin melakukan pemesanan sewa mobil.

Nama:
Tanggal Sewa:
Durasi Sewa:
Pilihan Mobil:
Jumlah Penumpang:
Lokasi Pengantaran:
Catatan Tambahan:

Mohon informasi ketersediaan dan harganya. Terima kasih `,

  privateTrip: `Halo Admin TRAGAtrans 

Saya tertarik dengan paket Private Trip.

Nama:
Paket Wisata:
Tanggal Perjalanan:
Jumlah Peserta:
Lokasi Penjemputan:
Catatan Tambahan:

Mohon informasi ketersediaan dan detail harganya. Terima kasih `,

  airportTransfer: `Halo Admin TRAGAtrans 

Saya ingin memesan layanan antar jemput bandara.

Nama:
Tanggal:
Jam:
Bandara:
Lokasi Tujuan/Penjemputan:
Jumlah Penumpang:
Jumlah Bagasi:
Catatan Tambahan:

Mohon informasi ketersediaan dan harganya. Terima kasih `,

  businessTrip: `Halo Admin TRAGAtrans 

Saya ingin berkonsultasi mengenai layanan perjalanan dinas.

Nama / Instansi:
Tanggal:
Tujuan:
Jumlah Peserta:
Pilihan Armada:
Durasi Perjalanan:
Lokasi Penjemputan:
Catatan Tambahan:

Mohon informasi ketersediaan dan penawarannya. Terima kasih `,
}

export function createWhatsAppLink(number, template = "general") {
  const message =
    whatsappTemplates[template] || whatsappTemplates.general

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
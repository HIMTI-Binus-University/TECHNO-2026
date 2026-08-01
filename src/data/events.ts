export interface ExpoSlide {
  id: string
  title: string
  description: string
}

// Ganti judul/deskripsi tiap slide sesuai booth/expo yang sebenarnya.
export const expoSlides: ExpoSlide[] = [
  {
    id: '1',
    title: 'Booth Sponsor & Partner',
    description: 'Lorem Ipsum...',
  },
  {
    id: '2',
    title: 'Booth Komunitas',
    description: 'Lorem Ipsum...',
  },
  {
    id: '3',
    title: 'Booth UMKM',
    description: 'Lorem Ipsum...',
  },
]

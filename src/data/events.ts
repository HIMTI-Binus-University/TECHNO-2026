export interface ExpoSlide {
  id: string
  title: string
  description: string
  image?: string
}

export const expoSlides: ExpoSlide[] = [
  {
    id: '1',
    title: 'Alam Sutera',
    description: 'Batch 1: 31 Juli - 1 Agustus | Batch 2: 14 - 15 Agustus',
    image: '/src/assets/binus-alsut.jpg',
  },
  {
    id: '2',
    title: 'Kemanggisan',
    description: 'Batch 1: 1 Agustus | Batch 2: 15 Agustus',
    image: '/src/assets/binus-kemanggisan.jpg',
  },
  {
    id: '3',
    title: 'Semarang',
    description: '10 Agustus',
    image: '/src/assets/binus-semarang.jpeg',
  },
  {
    id: '4',
    title: 'Bekasi',
    description: '12 - 13 Agustus',
    image: '/src/assets/binus-bekasi.jpeg',
  },
  {
    id: '5',
    title: 'Bandung',
    description: '13 Agustus',
    image: '/src/assets/binus-bandung.jpeg',
  },
  {
    id: '6',
    title: 'Medan',
    description: '13 Agustus',
    image: '/src/assets/binus-medan.webp',
  },
  {
    id: '7',
    title: 'Malang',
    description: '14 Agustus',
    image: '/src/assets/binus-malang.jpeg',
  },
  {
    id: '8',
    title: 'Senayan',
    description: '21 Agustus',
    image: '/src/assets/binus-senayan.jpg',
  },
]
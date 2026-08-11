import als from "../assets/binus-alsut.jpg"
import kmg from "../assets/binus-kemanggisan.jpg"
import smg from "../assets/binus-semarang.jpeg"
import bks from "../assets/binus-bekasi.jpeg"
import bdg from "../assets/binus-bandung.jpeg"
import mdn from "../assets/binus-medan.webp"
import mlg from "../assets/binus-malang.jpeg"
import sny from "../assets/binus-senayan.jpg"

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
    image: als,
  },
  {
    id: '2',
    title: 'Kemanggisan',
    description: 'Batch 1: 1 Agustus | Batch 2: 15 Agustus',
    image: kmg,
  },
  {
    id: '3',
    title: 'Semarang',
    description: '10 Agustus',
    image: smg,
  },
  {
    id: '4',
    title: 'Bekasi',
    description: '12 - 13 Agustus',
    image: bks,
  },
  {
    id: '5',
    title: 'Bandung',
    description: '13 Agustus',
    image: bdg,
  },
  {
    id: '6',
    title: 'Medan',
    description: '13 Agustus',
    image: mdn,
  },
  {
    id: '7',
    title: 'Malang',
    description: '14 Agustus',
    image: mlg,
  },
  {
    id: '8',
    title: 'Senayan',
    description: '21 Agustus',
    image: sny,
  },
]
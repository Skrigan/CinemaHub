export interface IPremiere {
  kinopoiskId: number
  nameRu: string
  nameEn: string | null
  year: number
  posterUrl: string
  posterUrlPreview: string
  countries: {
    country: string
  }[]
  genres: {
    genre: string
  }[]
  "duration": number
  "premiereRu": string
}

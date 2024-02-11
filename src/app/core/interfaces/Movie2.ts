export type Movie2 = {
  filmId: number
  nameRu?: string
  nameEn?: string
  type: string
  year: string | null
  description?: string
  filmLength?: string
  countries: {
    country: string
  }[]
  genres: {
    genre: string
  }[]
  rating: string | null
  ratingVoteCount: number
  posterUrl: string
  posterUrlPreview: string
}

export interface IRelease {
  filmId: number,
  nameRu: string,
  nameEn: string | null,
  year: number,
  posterUrl: string,
  posterUrlPreview: string,
  countries: {
    country: string
  }[],
  genres: {
    genre: string
  }[],
  rating: number | null,
  ratingVoteCount: number,
  expectationsRating: number | null,
  expectationsRatingVoteCount: number,
  duration: number,
  releaseDate: string
}

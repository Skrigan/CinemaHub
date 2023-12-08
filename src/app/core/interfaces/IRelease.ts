export interface IRelease {
  filmId: string,
  nameRu: string,
  nameEn: string,
  year: number,
  posterUrl: string,
  posterUrlPreview: string,
  countries: {
    country: string
  }[],
  genres: {
    genres: string
  }[],
  rating: number,
  ratingVoteCount: number,
  expectationsRating: number,
  expectationsRatingVoteCount: number,
  duration: number,
  releaseDate: string
}

//используй ПОСТЕР, название, дату, жанры, страну, продолжительность дату

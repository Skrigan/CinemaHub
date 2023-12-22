export type IMovie = {
  id: number
  name: string
  year: number
  poster: {
    url: string
    previewUrl: string
  }
  countries: {
    name: string
  }[]
  genres: {
    name: string
  }[]
  rating: {
    kp?: number
    imdb?: number
    tmdb?: number
    filmCritics?: number
    russianFilmCritics?: number
    await?: number | null
  }
  votes: {
    kp?: number
    imdb?: number
    tmdb?: number
    filmCritics?: number
    russianFilmCritics?: number
    await?: number | null
  }
}

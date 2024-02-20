import {Rating} from "./Rating";
import {Poster} from "./Poster";
import {Person} from "./Person";

export type MovieById = {
  id: number
  name?: "Человек паук" | null
  typeNumber: number
  year?: number | null
  description?: string | null
  shortDescription?: string | null
  rating: Rating
  movieLength?: number | null
  ageRating?: number | null
  logo: {
    url?: string | null
  }
  backdrop: Poster
  videos: {
    trailers: {
      url: string
      name: string
      site: string
      type: string
    }[]
  }
  genres: {
    name: string
  }[]
  countries: {
    name: string
  }[]
  persons: Person[]
  seasonsInfo: {
    number: number
    episodesCount: number
  }[]
  isSeries: boolean
  similarMovies: {
    id: number
    name: string
    enName?: string | null
    alternativeName?: string | null
    type: string
    poster: Poster
  }[]
  [key: string]: any
}

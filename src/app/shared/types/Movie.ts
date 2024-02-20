import {Rating} from "./Rating";
import {Votes} from "./Votes";
import {Poster} from "./Poster";

export type Movie = {
  id: number
  name: string
  year: number
  poster: Poster
  countries: {
    name: string
  }[]
  genres: {
    name: string
  }[]
  rating: Rating
  votes: Votes
}

export type PersonById = {
  personId: number
  webUrl: string | null
  nameRu: string | null
  nameEn: string | null
  sex: string | null
  posterUrl: string
  growth: number | null
  birthday: string | null
  death: string | null
  age: number | null
  birthplace: string | null
  deathplace: string | null
  hasAwards: number | null
  profession: string | null
  facts: string[]
  spouses: PersonByIdSpouse[]
  films: PersonByIdFilm[]
}

export type PersonByIdSpouse = {
    personId: number
    name: string
    divorced: boolean
    divorcedReason: string
    sex: string
    children: number
    webUrl: string
    relation: string
}

export type PersonByIdFilm = {
    filmId: number
    nameRu: string | null
    nameEn: string | null
    rating: string | null
    general: boolean
    description: string | null
    professionKey: string
}

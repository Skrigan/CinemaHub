export const movieTypePlural = ['фильмы', 'сериалы', 'мультфильмы', 'аниме', 'мультсериалы'];
export const movieType = ['фильм', 'сериал', 'мультфильм', 'аниме', 'мультсериал'];

export function getMovieType(typeNumber: number, inPlural = false) {
  return inPlural ? movieTypePlural[typeNumber - 1] : movieType[typeNumber - 1];
}

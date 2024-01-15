export const movieTypePlural = ['фильмы', 'сериалы', 'мультфильмы', 'аниме', 'мультфильмы'];
export const movieType = ['фильм', 'сериал', 'мультфильм', 'аниме', 'мультфильм'];

export function getMovieType(typeNumber: number, inPlural = false) {
  return inPlural ? movieTypePlural[typeNumber - 1] : movieType[typeNumber - 1];
}

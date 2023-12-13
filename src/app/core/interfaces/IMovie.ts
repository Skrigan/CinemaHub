export type IMovie = {
  id: number,
  name: string,
  year: number,
  poster: {
    url: string,
    previewUrl: string
  }
  countries: {
    name: string
  }[],
  genres: {
    name: string
  }[],
  rating: {
    kp?: number,
    imdb?: number,
    tmdb?: number,
    filmCritics?: number,
    russianFilmCritics?: number,
    await?: number | null,
  },
  votes: {
    kp?: number,
    imdb?: number,
    tmdb?: number,
    filmCritics?: number,
    russianFilmCritics?: number,
    await?: number | null,
  },
}

export const mockedMovies: IMovie[] = [
  {
    "rating": {
      "kp": 7.607,
      "imdb": 7.1,
      "filmCritics": 6.3,
      "russianFilmCritics": 72.973,
      "await": null
    },
    "votes": {
      "kp": 1190420,
      "imdb": 199709,
      "filmCritics": 259,
      "russianFilmCritics": 37,
      "await": 23490
    },
    "id": 1318972,
    "name": "Гнев человеческий",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/90d57813-387c-44c4-81c1-ecddb3c417a5/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/90d57813-387c-44c4-81c1-ecddb3c417a5/x1000"
    },
    "genres": [
      {
        "name": "боевик"
      },
      {
        "name": "триллер"
      }
    ],
    "countries": [
      {
        "name": "Великобритания"
      },
      {
        "name": "США"
      }
    ]
  },
  {
    "id": 927898,
    "name": "Переводчик",
    "rating": {
      "kp": 7.893,
      "imdb": 7.5,
      "filmCritics": 6.8,
      "russianFilmCritics": 87.5,
      "await": null
    },
    "votes": {
      "kp": 724860,
      "imdb": 142255,
      "filmCritics": 118,
      "russianFilmCritics": 16,
      "await": 13967
    },
    "year": 2022,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/5c775217-8796-4c7a-aba8-e4c6d48a6c36/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/5c775217-8796-4c7a-aba8-e4c6d48a6c36/x1000"
    },
    "genres": [
      {
        "name": "боевик"
      },
      {
        "name": "триллер"
      },
      {
        "name": "военный"
      },
      {
        "name": "история"
      },
      {
        "name": "драма"
      }
    ],
    "countries": [
      {
        "name": "Великобритания"
      },
      {
        "name": "Испания"
      },
      {
        "name": "США"
      }
    ]
  },
  {
    "rating": {
      "kp": 7.671,
      "imdb": 8,
      "filmCritics": 7.6,
      "russianFilmCritics": 72,
      "await": null
    },
    "votes": {
      "kp": 717361,
      "imdb": 729931,
      "filmCritics": 509,
      "russianFilmCritics": 25,
      "await": 89707
    },
    "id": 409424,
    "name": "Дюна",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/x1000"
    },
    "genres": [
      {
        "name": "фантастика"
      },
      {
        "name": "боевик"
      },
      {
        "name": "драма"
      },
      {
        "name": "приключения"
      }
    ],
    "countries": [
      {
        "name": "США"
      },
      {
        "name": "Канада"
      },
      {
        "name": "Венгрия"
      }
    ]
  },
  {
    "id": 4542208,
    "countries": [
      {
        "name": "Великобритания"
      },
      {
        "name": "США"
      }
    ],
    "genres": [
      {
        "name": "триллер"
      }
    ],
    "name": "Вышка",
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/21625a72-ee34-4151-aa9c-844c40f610fd/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/21625a72-ee34-4151-aa9c-844c40f610fd/x1000"
    },
    "rating": {
      "kp": 6.741,
      "imdb": 6.4,
      "filmCritics": 6.5,
      "russianFilmCritics": 0,
      "await": null
    },
    "votes": {
      "kp": 642146,
      "imdb": 96541,
      "filmCritics": 148,
      "russianFilmCritics": 0,
      "await": 3606
    },
    "year": 2022
  },
  {
    "id": 1405508,
    "countries": [
      {
        "name": "Великобритания"
      },
      {
        "name": "США"
      }
    ],
    "genres": [
      {
        "name": "боевик"
      },
      {
        "name": "комедия"
      }
    ],
    "name": "Операция «Фортуна»: Искусство побеждать",
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/x1000"
    },
    "rating": {
      "kp": 7.092,
      "imdb": 6.3,
      "filmCritics": 5.6,
      "russianFilmCritics": 87.5,
      "await": null
    },
    "votes": {
      "kp": 633558,
      "imdb": 76855,
      "filmCritics": 151,
      "russianFilmCritics": 16,
      "await": 35771
    },
    "year": 2022
  },
  {
    "rating": {
      "kp": 7.576,
      "imdb": 7.3,
      "filmCritics": 6.8,
      "russianFilmCritics": 65.5172,
      "await": null
    },
    "votes": {
      "kp": 590959,
      "imdb": 256808,
      "filmCritics": 412,
      "russianFilmCritics": 29,
      "await": 12418
    },
    "id": 804662,
    "name": "Круэлла",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/9bb0f260-1c5f-4698-91cc-de481bfd0f55/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/9bb0f260-1c5f-4698-91cc-de481bfd0f55/x1000"
    },
    "genres": [
      {
        "name": "комедия"
      },
      {
        "name": "криминал"
      },
      {
        "name": "драма"
      }
    ],
    "countries": [
      {
        "name": "США"
      },
      {
        "name": "Великобритания"
      }
    ]
  },
  {
    "id": 5078983,
    "name": "Мажор в Сочи",
    "rating": {
      "kp": 7.055,
      "imdb": 0,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": null
    },
    "votes": {
      "kp": 590583,
      "imdb": 0,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": 42622
    },
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/dd801e2d-9532-406e-a84e-9c6d74bc6d2d/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/dd801e2d-9532-406e-a84e-9c6d74bc6d2d/x1000"
    },
    "genres": [
      {
        "name": "приключения"
      },
      {
        "name": "комедия"
      }
    ],
    "countries": [
      {
        "name": "Россия"
      }
    ],
    "year": 2022
  },
  {
    "id": 1199100,
    "name": "Главный герой",
    "rating": {
      "kp": 7.379,
      "imdb": 7.1,
      "filmCritics": 7,
      "russianFilmCritics": 85.7143,
      "await": null
    },
    "votes": {
      "kp": 581909,
      "imdb": 408843,
      "filmCritics": 297,
      "russianFilmCritics": 14,
      "await": 52995
    },
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/db4fbef1-466a-4dec-9b7a-d4f13eb45738/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/db4fbef1-466a-4dec-9b7a-d4f13eb45738/x1000"
    },
    "genres": [
      {
        "name": "фантастика"
      },
      {
        "name": "боевик"
      },
      {
        "name": "комедия"
      },
      {
        "name": "мелодрама"
      }
    ],
    "countries": [
      {
        "name": "США"
      },
      {
        "name": "Канада"
      }
    ]
  },
  {
    "id": 1387021,
    "name": "Лига справедливости Зака Снайдера",
    "rating": {
      "kp": 7.824,
      "imdb": 7.9,
      "filmCritics": 6.7,
      "russianFilmCritics": 92.3077,
      "await": null
    },
    "votes": {
      "kp": 579229,
      "imdb": 427927,
      "filmCritics": 313,
      "russianFilmCritics": 26,
      "await": 57100
    },
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/3518c34c-092f-42bf-b948-87ebe0bd325a/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/3518c34c-092f-42bf-b948-87ebe0bd325a/x1000"
    },
    "genres": [
      {
        "name": "фантастика"
      },
      {
        "name": "боевик"
      },
      {
        "name": "фэнтези"
      }
    ],
    "countries": [
      {
        "name": "США"
      }
    ]
  },
  {
    "id": 1326397,
    "name": "Батя",
    "rating": {
      "kp": 7.649,
      "imdb": 6.7,
      "filmCritics": 0,
      "russianFilmCritics": 100,
      "await": null
    },
    "votes": {
      "kp": 549325,
      "imdb": 1438,
      "filmCritics": 0,
      "russianFilmCritics": 8,
      "await": 4898
    },
    "year": 2020,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/907e3552-9a1e-48d1-8a01-d013a76a8343/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/907e3552-9a1e-48d1-8a01-d013a76a8343/x1000"
    },
    "genres": [
      {
        "name": "комедия"
      },
      {
        "name": "мелодрама"
      }
    ],
    "countries": [
      {
        "name": "Россия"
      }
    ]
  },
  {
    "rating": {
      "kp": 7.186,
      "imdb": 6.3,
      "filmCritics": 0,
      "russianFilmCritics": 69.4444,
      "await": null
    },
    "votes": {
      "kp": 537437,
      "imdb": 13320,
      "filmCritics": 0,
      "russianFilmCritics": 36,
      "await": 21080
    },
    "id": 1109271,
    "name": "Майор Гром: Чумной Доктор",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e2ca1226-230e-4b49-b13d-d92d92e36d40/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e2ca1226-230e-4b49-b13d-d92d92e36d40/x1000"
    },
    "genres": [
      {
        "name": "боевик"
      },
      {
        "name": "криминал"
      },
      {
        "name": "детектив"
      },
      {
        "name": "комедия"
      }
    ],
    "countries": [
      {
        "name": "Россия"
      }
    ]
  },
  {
    "id": 1322324,
    "name": "Всё везде и сразу",
    "rating": {
      "kp": 7.205,
      "imdb": 7.8,
      "filmCritics": 8.5,
      "russianFilmCritics": 88.8889,
      "await": null
    },
    "votes": {
      "kp": 534283,
      "imdb": 491825,
      "filmCritics": 403,
      "russianFilmCritics": 9,
      "await": 1679
    },
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/7b756b66-ae33-46c6-be5f-03c3577a7f8b/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/7b756b66-ae33-46c6-be5f-03c3577a7f8b/x1000"
    },
    "genres": [
      {
        "name": "фантастика"
      },
      {
        "name": "комедия"
      },
      {
        "name": "боевик"
      },
      {
        "name": "приключения"
      },
      {
        "name": "драма"
      }
    ],
    "countries": [
      {
        "name": "США"
      }
    ]
  },
  {
    "rating": {
      "kp": 7.517,
      "imdb": 7.3,
      "filmCritics": 6.9,
      "russianFilmCritics": 60,
      "await": null
    },
    "votes": {
      "kp": 529911,
      "imdb": 569839,
      "filmCritics": 375,
      "russianFilmCritics": 30,
      "await": 43246
    },
    "id": 1236063,
    "name": "Довод",
    "year": 2020,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/b35131e0-041b-4ebc-af90-7104f2f75821/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/b35131e0-041b-4ebc-af90-7104f2f75821/x1000"
    },
    "genres": [
      {
        "name": "фантастика"
      },
      {
        "name": "боевик"
      },
      {
        "name": "триллер"
      }
    ],
    "countries": [
      {
        "name": "Великобритания"
      },
      {
        "name": "США"
      }
    ]
  },
  {
    "rating": {
      "kp": 7.566,
      "imdb": 7.7,
      "filmCritics": 8.1,
      "russianFilmCritics": 90,
      "await": null
    },
    "votes": {
      "kp": 503785,
      "imdb": 304778,
      "filmCritics": 371,
      "russianFilmCritics": 10,
      "await": 67697
    },
    "id": 1267348,
    "name": "Джон Уик 4",
    "year": 2023,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/62c1301b-c913-4b3c-af87-74934ae1ec93/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/62c1301b-c913-4b3c-af87-74934ae1ec93/x1000"
    },
    "genres": [
      {
        "name": "боевик"
      },
      {
        "name": "триллер"
      },
      {
        "name": "криминал"
      }
    ],
    "countries": [
      {
        "name": "США"
      },
      {
        "name": "Германия"
      }
    ]
  },
  {
    "rating": {
      "kp": 7.391,
      "imdb": 6.5,
      "filmCritics": 6.2,
      "russianFilmCritics": 0,
      "await": null
    },
    "votes": {
      "kp": 484534,
      "imdb": 43783,
      "filmCritics": 159,
      "russianFilmCritics": 2,
      "await": 12139
    },
    "id": 1355139,
    "name": "Лулу и Бриггс",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/c456643c-84fc-4b24-a288-668e3afa95fc/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/c456643c-84fc-4b24-a288-668e3afa95fc/x1000"
    },
    "genres": [
      {
        "name": "комедия"
      },
      {
        "name": "драма"
      },
      {
        "name": "приключения"
      }
    ],
    "countries": [
      {
        "name": "США"
      }
    ]
  },
  {
    "rating": {
      "kp": 7.321,
      "imdb": 7.4,
      "filmCritics": 7.5,
      "russianFilmCritics": 84.6154,
      "await": null
    },
    "votes": {
      "kp": 468877,
      "imdb": 421650,
      "filmCritics": 343,
      "russianFilmCritics": 13,
      "await": 12111
    },
    "id": 1219149,
    "name": "Шан-Чи и легенда десяти колец",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/bb806dff-fac0-4459-ab51-1192e07f5da6/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/bb806dff-fac0-4459-ab51-1192e07f5da6/x1000"
    },
    "genres": [
      {
        "name": "фэнтези"
      },
      {
        "name": "боевик"
      },
      {
        "name": "комедия"
      },
      {
        "name": "приключения"
      },
      {
        "name": "фантастика"
      }
    ],
    "countries": [
      {
        "name": "США"
      }
    ]
  },
  {
    "rating": {
      "kp": 6.158,
      "imdb": 5.9,
      "filmCritics": 5.4,
      "russianFilmCritics": 21.4286,
      "await": null
    },
    "votes": {
      "kp": 442398,
      "imdb": 251179,
      "filmCritics": 276,
      "russianFilmCritics": 14,
      "await": 96881
    },
    "id": 1227967,
    "name": "Веном 2",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/58a86807-b6e2-45dc-8780-c38f24e6a4ea/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/58a86807-b6e2-45dc-8780-c38f24e6a4ea/x1000"
    },
    "genres": [
      {
        "name": "фантастика"
      },
      {
        "name": "боевик"
      },
      {
        "name": "ужасы"
      }
    ],
    "countries": [
      {
        "name": "США"
      },
      {
        "name": "Китай"
      }
    ]
  },
  {
    "id": 5129252,
    "genres": [
      {
        "name": "комедия"
      }
    ],
    "countries": [
      {
        "name": "Россия"
      }
    ],
    "name": "Беспринципные в деревне",
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/d68d8ae2-ec3d-47f6-9991-7aba20890e0e/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/d68d8ae2-ec3d-47f6-9991-7aba20890e0e/x1000"
    },
    "rating": {
      "kp": 6.468,
      "imdb": 0,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": null
    },
    "votes": {
      "kp": 432314,
      "imdb": 0,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": 15491
    },
    "year": 2023
  },
  {
    "id": 1368311,
    "name": "Черный ящик",
    "rating": {
      "kp": 7.597,
      "imdb": 7.2,
      "filmCritics": 7.3,
      "russianFilmCritics": 100,
      "await": null
    },
    "votes": {
      "kp": 425944,
      "imdb": 13645,
      "filmCritics": 18,
      "russianFilmCritics": 8,
      "await": 192
    },
    "year": 2020,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/67232332-829f-4409-a668-2d38cb0b3b15/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/67232332-829f-4409-a668-2d38cb0b3b15/x1000"
    },
    "genres": [
      {
        "name": "детектив"
      },
      {
        "name": "триллер"
      }
    ],
    "countries": [
      {
        "name": "Франция"
      }
    ]
  },
  {
    "id": 1445143,
    "countries": [
      {
        "name": "Россия"
      }
    ],
    "genres": [
      {
        "name": "боевик"
      },
      {
        "name": "комедия"
      }
    ],
    "name": "Мажор. Фильм",
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cc39ef04-0bd7-4eb6-8563-220fca81edfc/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cc39ef04-0bd7-4eb6-8563-220fca81edfc/x1000"
    },
    "rating": {
      "kp": 6.799,
      "imdb": 5.3,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": null
    },
    "votes": {
      "kp": 423782,
      "imdb": 320,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": 8861
    },
    "year": 2021
  },
  {
    "id": 1263705,
    "name": "Еще по одной",
    "rating": {
      "kp": 7.55,
      "imdb": 7.7,
      "filmCritics": 7.9,
      "russianFilmCritics": 100,
      "await": null
    },
    "votes": {
      "kp": 414804,
      "imdb": 184865,
      "filmCritics": 228,
      "russianFilmCritics": 18,
      "await": 2287
    },
    "year": 2020,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a575032b-1b9f-4ea4-adf2-a3dd3359acc8/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a575032b-1b9f-4ea4-adf2-a3dd3359acc8/x1000"
    },
    "genres": [
      {
        "name": "драма"
      },
      {
        "name": "комедия"
      }
    ],
    "countries": [
      {
        "name": "Дания"
      },
      {
        "name": "Швеция"
      },
      {
        "name": "Нидерланды"
      }
    ]
  },
  {
    "id": 1045583,
    "name": "Конёк-Горбунок",
    "rating": {
      "kp": 7.028,
      "imdb": 5.7,
      "filmCritics": 0,
      "russianFilmCritics": 90,
      "await": null
    },
    "votes": {
      "kp": 412401,
      "imdb": 1118,
      "filmCritics": 0,
      "russianFilmCritics": 10,
      "await": 6241
    },
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/a624e829-18cc-4268-8bc5-caff965f0cf3/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/a624e829-18cc-4268-8bc5-caff965f0cf3/x1000"
    },
    "genres": [
      {
        "name": "фэнтези"
      },
      {
        "name": "комедия"
      },
      {
        "name": "приключения"
      },
      {
        "name": "семейный"
      }
    ],
    "countries": [
      {
        "name": "Россия"
      }
    ]
  },
  {
    "id": 1309596,
    "name": "Никто",
    "rating": {
      "kp": 7.382,
      "imdb": 7.4,
      "filmCritics": 7,
      "russianFilmCritics": 87.5,
      "await": null
    },
    "votes": {
      "kp": 412223,
      "imdb": 310365,
      "filmCritics": 286,
      "russianFilmCritics": 16,
      "await": 9419
    },
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a74d86f6-a78a-46dd-8c1e-65cd79984902/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a74d86f6-a78a-46dd-8c1e-65cd79984902/x1000"
    },
    "genres": [
      {
        "name": "боевик"
      },
      {
        "name": "триллер"
      },
      {
        "name": "криминал"
      }
    ],
    "countries": [
      {
        "name": "США"
      },
      {
        "name": "Япония"
      }
    ]
  },
  {
    "id": 4370148,
    "countries": [
      {
        "name": "Россия"
      }
    ],
    "genres": [
      {
        "name": "семейный"
      },
      {
        "name": "комедия"
      },
      {
        "name": "фэнтези"
      }
    ],
    "name": "Чебурашка",
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/x1000"
    },
    "rating": {
      "kp": 7.215,
      "imdb": 5.8,
      "filmCritics": 0,
      "russianFilmCritics": 100,
      "await": null
    },
    "votes": {
      "kp": 409079,
      "imdb": 1462,
      "filmCritics": 0,
      "russianFilmCritics": 3,
      "await": 12328
    },
    "year": 2022
  },
  {
    "rating": {
      "kp": 7.937,
      "imdb": 8.2,
      "filmCritics": 7.9,
      "russianFilmCritics": 80,
      "await": null
    },
    "votes": {
      "kp": 399683,
      "imdb": 846355,
      "filmCritics": 431,
      "russianFilmCritics": 15,
      "await": 106856
    },
    "id": 1309570,
    "name": "Человек-паук: Нет пути домой",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/731c4031-7389-44f4-8c15-f9f4e3b0ed90/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/731c4031-7389-44f4-8c15-f9f4e3b0ed90/x1000"
    },
    "genres": [
      {
        "name": "фантастика"
      },
      {
        "name": "боевик"
      },
      {
        "name": "приключения"
      },
      {
        "name": "фэнтези"
      }
    ],
    "countries": [
      {
        "name": "США"
      }
    ]
  },
  {
    "rating": {
      "kp": 6.682,
      "imdb": 7.2,
      "filmCritics": 7.5,
      "russianFilmCritics": 94.2857,
      "await": null
    },
    "votes": {
      "kp": 384893,
      "imdb": 393394,
      "filmCritics": 383,
      "russianFilmCritics": 35,
      "await": 36487
    },
    "id": 1008477,
    "name": "Отряд самоубийц: Миссия навылет",
    "year": 2021,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/68c49244-e0f9-43d1-a3b4-ff8685b1bfcc/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/68c49244-e0f9-43d1-a3b4-ff8685b1bfcc/x1000"
    },
    "genres": [
      {
        "name": "боевик"
      },
      {
        "name": "фантастика"
      },
      {
        "name": "комедия"
      },
      {
        "name": "фэнтези"
      }
    ],
    "countries": [
      {
        "name": "США"
      }
    ]
  },
  {
    "id": 4536580,
    "countries": [
      {
        "name": "Россия"
      }
    ],
    "genres": [
      {
        "name": "фэнтези"
      },
      {
        "name": "комедия"
      },
      {
        "name": "семейный"
      },
      {
        "name": "приключения"
      }
    ],
    "name": "Баба Яга спасает мир",
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/af29bd1d-46a0-451d-bcd8-de9178d15867/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/af29bd1d-46a0-451d-bcd8-de9178d15867/x1000"
    },
    "rating": {
      "kp": 7.25,
      "imdb": 0,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": null
    },
    "votes": {
      "kp": 379719,
      "imdb": 0,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": 3699
    },
    "year": 2023
  },
  {
    "rating": {
      "kp": 7.827,
      "imdb": 6.5,
      "filmCritics": 0,
      "russianFilmCritics": 80,
      "await": null
    },
    "votes": {
      "kp": 365741,
      "imdb": 1532,
      "filmCritics": 0,
      "russianFilmCritics": 5,
      "await": 3150
    },
    "id": 1183599,
    "name": "Огонь",
    "year": 2020,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/76f7e218-6871-428b-b65d-221f6de7e1a1/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/76f7e218-6871-428b-b65d-221f6de7e1a1/x1000"
    },
    "genres": [
      {
        "name": "драма"
      },
      {
        "name": "боевик"
      }
    ],
    "countries": [
      {
        "name": "Россия"
      }
    ]
  },
  {
    "id": 1209527,
    "name": "Три тысячи лет желаний",
    "rating": {
      "kp": 7.24,
      "imdb": 6.7,
      "filmCritics": 6.5,
      "russianFilmCritics": 75,
      "await": null
    },
    "votes": {
      "kp": 357767,
      "imdb": 56491,
      "filmCritics": 258,
      "russianFilmCritics": 12,
      "await": 8628
    },
    "year": 2022,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a601349b-fc12-490f-aba8-bc12e99ea522/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a601349b-fc12-490f-aba8-bc12e99ea522/x1000"
    },
    "genres": [
      {
        "name": "фэнтези"
      },
      {
        "name": "драма"
      },
      {
        "name": "мелодрама"
      }
    ],
    "countries": [
      {
        "name": "Австралия"
      },
      {
        "name": "США"
      }
    ]
  },
  {
    "id": 4632862,
    "countries": [
      {
        "name": "Китай"
      }
    ],
    "genres": [
      {
        "name": "комедия"
      },
      {
        "name": "боевик"
      },
      {
        "name": "драма"
      }
    ],
    "name": "Кунг-фу жеребец",
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b79effc2-518e-4992-8241-fff34eb6f4ca/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b79effc2-518e-4992-8241-fff34eb6f4ca/x1000"
    },
    "rating": {
      "kp": 7.999,
      "imdb": 6.3,
      "filmCritics": 5.7,
      "russianFilmCritics": 100,
      "await": null
    },
    "votes": {
      "kp": 354553,
      "imdb": 4319,
      "filmCritics": 31,
      "russianFilmCritics": 3,
      "await": 1398
    },
    "year": 2023
  }
];

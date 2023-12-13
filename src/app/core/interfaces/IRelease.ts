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

export const mockedReleases: IRelease[] = [
  {
    "filmId": 4819561,
    "nameRu": "Мой парень — купидон",
    "nameEn": "Nae namjaneun kyupideu",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4819561.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4819561.jpg",
    "countries": [
      {
        "country": "Корея Южная"
      }
    ],
    "genres": [
      {
        "genre": "мелодрама"
      },
      {
        "genre": "комедия"
      },
      {
        "genre": "фэнтези"
      }
    ],
    "rating": null,
    "ratingVoteCount": 24,
    "expectationsRating": 98.95,
    "expectationsRatingVoteCount": 398,
    "duration": 503,
    "releaseDate": "2023-12-01"
  },
  {
    "filmId": 4477074,
    "nameRu": "Май декабрь",
    "nameEn": "May December",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4477074.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4477074.jpg",
    "countries": [
      {
        "country": "США"
      }
    ],
    "genres": [
      {
        "genre": "драма"
      }
    ],
    "rating": 6.815,
    "ratingVoteCount": 896,
    "expectationsRating": 98.36,
    "expectationsRatingVoteCount": 2119,
    "duration": 117,
    "releaseDate": "2023-12-01"
  },
  {
    "filmId": 5119846,
    "nameRu": "Кеша должен умереть",
    "nameEn": null,
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5119846.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5119846.jpg",
    "countries": [
      {
        "country": "Россия"
      }
    ],
    "genres": [
      {
        "genre": "драма"
      },
      {
        "genre": "комедия"
      }
    ],
    "rating": 6.702,
    "ratingVoteCount": 1901,
    "expectationsRating": 98.09,
    "expectationsRatingVoteCount": 1227,
    "duration": 0,
    "releaseDate": "2023-12-01"
  },
  {
    "filmId": 5048599,
    "nameRu": "Конфетный переулок",
    "nameEn": "Candy Cane Lane",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5048599.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5048599.jpg",
    "countries": [
      {
        "country": "США"
      }
    ],
    "genres": [
      {
        "genre": "фэнтези"
      },
      {
        "genre": "комедия"
      }
    ],
    "rating": null,
    "ratingVoteCount": 157,
    "expectationsRating": 97.94,
    "expectationsRatingVoteCount": 274,
    "duration": 0,
    "releaseDate": "2023-12-01"
  },
  {
    "filmId": 5318704,
    "nameRu": "Крик. Ночь перед Рождеством",
    "nameEn": "It's a Wonderful Knife",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5318704.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5318704.jpg",
    "countries": [
      {
        "country": "Великобритания"
      },
      {
        "country": "США"
      },
      {
        "country": "Канада"
      }
    ],
    "genres": [
      {
        "genre": "ужасы"
      },
      {
        "genre": "комедия"
      },
      {
        "genre": "фантастика"
      }
    ],
    "rating": 4.787,
    "ratingVoteCount": 243,
    "expectationsRating": 98.12,
    "expectationsRatingVoteCount": 188,
    "duration": 87,
    "releaseDate": "2023-12-01"
  },
  {
    "filmId": 5284642,
    "nameRu": "Король улиц",
    "nameEn": "Omar la fraise",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5284642.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5284642.jpg",
    "countries": [
      {
        "country": "Франция"
      },
      {
        "country": "Алжир"
      }
    ],
    "genres": [
      {
        "genre": "криминал"
      },
      {
        "genre": "комедия"
      }
    ],
    "rating": 6.266,
    "ratingVoteCount": 1080,
    "expectationsRating": null,
    "expectationsRatingVoteCount": 3,
    "duration": 92,
    "releaseDate": "2023-12-04"
  },
  {
    "filmId": 4396570,
    "nameRu": "Трактир «Черная дыра»",
    "nameEn": "Demon Pit",
    "year": 2022,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4396570.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4396570.jpg",
    "countries": [
      {
        "country": "США"
      }
    ],
    "genres": [
      {
        "genre": "ужасы"
      }
    ],
    "rating": null,
    "ratingVoteCount": 31,
    "expectationsRating": null,
    "expectationsRatingVoteCount": 1,
    "duration": 94,
    "releaseDate": "2023-12-04"
  },
  {
    "filmId": 1077781,
    "nameRu": "Убийцы цветочной луны",
    "nameEn": "Killers of the Flower Moon",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1077781.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1077781.jpg",
    "countries": [
      {
        "country": "США"
      }
    ],
    "genres": [
      {
        "genre": "драма"
      },
      {
        "genre": "криминал"
      },
      {
        "genre": "история"
      }
    ],
    "rating": 7.308,
    "ratingVoteCount": 19073,
    "expectationsRating": 99.7,
    "expectationsRatingVoteCount": 52925,
    "duration": 206,
    "releaseDate": "2023-12-05"
  },
  {
    "filmId": 4407582,
    "nameRu": "Контрабандистки",
    "nameEn": "Milsu",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4407582.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4407582.jpg",
    "countries": [
      {
        "country": "Корея Южная"
      }
    ],
    "genres": [
      {
        "genre": "криминал"
      },
      {
        "genre": "комедия"
      }
    ],
    "rating": null,
    "ratingVoteCount": 121,
    "expectationsRating": null,
    "expectationsRatingVoteCount": 81,
    "duration": 129,
    "releaseDate": "2023-12-05"
  },
  {
    "filmId": 5174731,
    "nameRu": "Убей её, если сможешь",
    "nameEn": "Hunt Her, Kill Her",
    "year": 2022,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5174731.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5174731.jpg",
    "countries": [
      {
        "country": "США"
      }
    ],
    "genres": [
      {
        "genre": "ужасы"
      },
      {
        "genre": "триллер"
      }
    ],
    "rating": null,
    "ratingVoteCount": 129,
    "expectationsRating": null,
    "expectationsRatingVoteCount": 0,
    "duration": 89,
    "releaseDate": "2023-12-05"
  },
  {
    "filmId": 5394455,
    "nameRu": "Крионика",
    "nameEn": null,
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5394455.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5394455.jpg",
    "countries": [
      {
        "country": "Россия"
      }
    ],
    "genres": [
      {
        "genre": "документальный"
      }
    ],
    "rating": null,
    "ratingVoteCount": 15,
    "expectationsRating": null,
    "expectationsRatingVoteCount": 17,
    "duration": 40,
    "releaseDate": "2023-12-06"
  },
  {
    "filmId": 5416033,
    "nameRu": "Саундтрек № 2",
    "nameEn": "Saundeuteuraek#2",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5416033.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5416033.jpg",
    "countries": [
      {
        "country": "Корея Южная"
      }
    ],
    "genres": [
      {
        "genre": "мелодрама"
      },
      {
        "genre": "музыка"
      }
    ],
    "rating": null,
    "ratingVoteCount": 16,
    "expectationsRating": null,
    "expectationsRatingVoteCount": 37,
    "duration": 45,
    "releaseDate": "2023-12-06"
  },
  {
    "filmId": 1436043,
    "nameRu": "Сны Алисы",
    "nameEn": null,
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1436043.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1436043.jpg",
    "countries": [
      {
        "country": "Россия"
      }
    ],
    "genres": [
      {
        "genre": "триллер"
      }
    ],
    "rating": null,
    "ratingVoteCount": 193,
    "expectationsRating": 97.32,
    "expectationsRatingVoteCount": 2067,
    "duration": 48,
    "releaseDate": "2023-12-07"
  },
  {
    "filmId": 5200978,
    "nameRu": "Аналоговый отряд",
    "nameEn": "Team Rak Nak Lok",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5200978.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5200978.jpg",
    "countries": [
      {
        "country": "Таиланд"
      }
    ],
    "genres": [
      {
        "genre": "драма"
      }
    ],
    "rating": null,
    "ratingVoteCount": 0,
    "expectationsRating": null,
    "expectationsRatingVoteCount": 57,
    "duration": 0,
    "releaseDate": "2023-12-07"
  },
  {
    "filmId": 4511543,
    "nameRu": "Оставь мир позади",
    "nameEn": "Leave the World Behind",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4511543.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4511543.jpg",
    "countries": [
      {
        "country": "США"
      }
    ],
    "genres": [
      {
        "genre": "триллер"
      },
      {
        "genre": "драма"
      }
    ],
    "rating": 6.97,
    "ratingVoteCount": 211,
    "expectationsRating": 99.51,
    "expectationsRatingVoteCount": 2562,
    "duration": 140,
    "releaseDate": "2023-12-08"
  },
  {
    "filmId": 5318704,
    "nameRu": "Крик. Ночь перед Рождеством",
    "nameEn": "It's a Wonderful Knife",
    "year": 2023,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5318704.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5318704.jpg",
    "countries": [
      {
        "country": "Великобритания"
      },
      {
        "country": "США"
      },
      {
        "country": "Канада"
      }
    ],
    "genres": [
      {
        "genre": "ужасы"
      },
      {
        "genre": "комедия"
      },
      {
        "genre": "фантастика"
      }
    ],
    "rating": 4.787,
    "ratingVoteCount": 243,
    "expectationsRating": 98.12,
    "expectationsRatingVoteCount": 188,
    "duration": 87,
    "releaseDate": "2023-12-01"
  },
]


export const mockedPremieres: any[] = [
    {
      "kinopoiskId": 4398470,
      "nameRu": "Животное",
      "nameEn": "Animal",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4398470.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4398470.jpg",
      "countries": [
        {
          "country": "Индия"
        }
      ],
      "genres": [
        {
          "genre": "боевик"
        },
        {
          "genre": "триллер"
        },
        {
          "genre": "драма"
        }
      ],
      "duration": 201,
      "premiereRu": "2023-12-01"
    },
    {
      "kinopoiskId": 1230396,
      "nameRu": "Щелкунчик",
      "nameEn": "Der Nussknacker",
      "year": 2013,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1230396.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1230396.jpg",
      "countries": [
        {
          "country": "Австрия"
        },
        {
          "country": "Германия"
        }
      ],
      "genres": [
        {
          "genre": "фэнтези"
        },
        {
          "genre": "музыка"
        }
      ],
      "duration": 101,
      "premiereRu": "2023-12-01"
    },
    {
      "kinopoiskId": 5418900,
      "nameRu": "Ничего не бойся, я с тобой",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5418900.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5418900.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "мюзикл"
        },
        {
          "genre": "мелодрама"
        }
      ],
      "duration": 150,
      "premiereRu": "2023-12-01"
    },
    {
      "kinopoiskId": 5421530,
      "nameRu": "Йонас Кауфман: Рождество с друзьями",
      "nameEn": "Jonas Kaufmann: Christmas with Friends",
      "year": 2022,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5421530.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5421530.jpg",
      "countries": [
        {
          "country": "Германия"
        }
      ],
      "genres": [
        {
          "genre": "концерт"
        }
      ],
      "duration": 69,
      "premiereRu": "2023-12-01"
    },
    {
      "kinopoiskId": 5405405,
      "nameRu": "Архитектор: История Алексея Германа и его фильмов",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5405405.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5405405.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "документальный"
        },
        {
          "genre": "биография"
        }
      ],
      "duration": 66,
      "premiereRu": "2023-12-02"
    },
    {
      "kinopoiskId": 5419163,
      "nameRu": "Мульт в кино. Выпуск №163. 2024 повода улыбнуться",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5419163.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5419163.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "детский"
        },
        {
          "genre": "мультфильм"
        }
      ],
      "duration": 45,
      "premiereRu": "2023-12-02"
    },
    {
      "kinopoiskId": 682367,
      "nameRu": "Кентервильское привидение",
      "nameEn": "The Canterville Ghost",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/682367.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/682367.jpg",
      "countries": [
        {
          "country": "Великобритания"
        }
      ],
      "genres": [
        {
          "genre": "мультфильм"
        },
        {
          "genre": "комедия"
        }
      ],
      "duration": 84,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 1071383,
      "nameRu": "Мальчик и птица",
      "nameEn": "Kimitachi wa Dou Ikiru ka",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1071383.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1071383.jpg",
      "countries": [
        {
          "country": "Япония"
        }
      ],
      "genres": [
        {
          "genre": "аниме"
        },
        {
          "genre": "мультфильм"
        },
        {
          "genre": "драма"
        }
      ],
      "duration": 124,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 5324995,
      "nameRu": "Ёлки 10",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5324995.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5324995.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        }
      ],
      "duration": 90,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 4441830,
      "nameRu": "Лунный человек",
      "nameEn": "Du xing yue qiu",
      "year": 2022,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4441830.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4441830.jpg",
      "countries": [
        {
          "country": "Китай"
        }
      ],
      "genres": [
        {
          "genre": "фантастика"
        },
        {
          "genre": "комедия"
        },
        {
          "genre": "мелодрама"
        }
      ],
      "duration": 122,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 5253205,
      "nameRu": "Одна дома",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5253205.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5253205.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        },
        {
          "genre": "семейный"
        }
      ],
      "duration": 92,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 4934925,
      "nameRu": "Лунатики",
      "nameEn": "",
      "year": 2022,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4934925.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4934925.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        }
      ],
      "duration": 92,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 4477548,
      "nameRu": "Запретная страсть",
      "nameEn": "L'été dernier",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4477548.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4477548.jpg",
      "countries": [
        {
          "country": "Франция"
        },
        {
          "country": "Норвегия"
        }
      ],
      "genres": [
        {
          "genre": "триллер"
        },
        {
          "genre": "драма"
        }
      ],
      "duration": 104,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 1399724,
      "nameRu": "Другие: Проклятие кукушки",
      "nameEn": "El Cuco",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1399724.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1399724.jpg",
      "countries": [
        {
          "country": "Испания"
        },
        {
          "country": "Германия"
        }
      ],
      "genres": [
        {
          "genre": "ужасы"
        },
        {
          "genre": "фэнтези"
        },
        {
          "genre": "триллер"
        }
      ],
      "duration": 98,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 4958169,
      "nameRu": "Кто не спрятался...",
      "nameEn": "The Sacrifice Game",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4958169.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4958169.jpg",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "ужасы"
        }
      ],
      "duration": 100,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 5351640,
      "nameRu": "Мужчина к Новому году",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5351640.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5351640.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        },
        {
          "genre": "мелодрама"
        }
      ],
      "duration": 90,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 4878928,
      "nameRu": "Врата ада",
      "nameEn": "The Gates",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4878928.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4878928.jpg",
      "countries": [
        {
          "country": "Ирландия"
        }
      ],
      "genres": [
        {
          "genre": "ужасы"
        }
      ],
      "duration": 111,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 4887008,
      "nameRu": "Геше Вангьял. С благословением трёх драгоценностей",
      "nameEn": "",
      "year": 2022,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4887008.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4887008.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "документальный"
        },
        {
          "genre": "биография"
        }
      ],
      "duration": 76,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 5397641,
      "nameRu": "Привет, пап!",
      "nameEn": "Hi Nanna",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5397641.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5397641.jpg",
      "countries": [
        {
          "country": "Индия"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "мелодрама"
        },
        {
          "genre": "семейный"
        }
      ],
      "duration": 155,
      "premiereRu": "2023-12-07"
    },
    {
      "kinopoiskId": 17705,
      "nameRu": "Более странно, чем в раю",
      "nameEn": "Stranger Than Paradise",
      "year": 1984,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/17705.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/17705.jpg",
      "countries": [
        {
          "country": "США"
        },
        {
          "country": "Германия (ФРГ)"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "комедия"
        }
      ],
      "duration": 89,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 5253703,
      "nameRu": "Манюня: Новогодние приключения",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5253703.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5253703.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        },
        {
          "genre": "приключения"
        },
        {
          "genre": "семейный"
        }
      ],
      "duration": 85,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 5306496,
      "nameRu": "Новогодний шеф",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5306496.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5306496.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        }
      ],
      "duration": null,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 5212442,
      "nameRu": "Гномы. Новогодний беспредел",
      "nameEn": "There's Something in the Barn",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5212442.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5212442.jpg",
      "countries": [
        {
          "country": "Норвегия"
        },
        {
          "country": "Финляндия"
        }
      ],
      "genres": [
        {
          "genre": "ужасы"
        },
        {
          "genre": "фэнтези"
        },
        {
          "genre": "комедия"
        }
      ],
      "duration": 100,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 4987450,
      "nameRu": "Моя жена – киллер",
      "nameEn": "Role Play",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4987450.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4987450.jpg",
      "countries": [
        {
          "country": "Франция"
        },
        {
          "country": "США"
        },
        {
          "country": "Германия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        },
        {
          "genre": "боевик"
        }
      ],
      "duration": 100,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 4407582,
      "nameRu": "Контрабандистки",
      "nameEn": "Milsu",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4407582.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4407582.jpg",
      "countries": [
        {
          "country": "Корея Южная"
        }
      ],
      "genres": [
        {
          "genre": "криминал"
        },
        {
          "genre": "комедия"
        }
      ],
      "duration": 129,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 5332760,
      "nameRu": "Честный развод. Бенефис",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5332760.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5332760.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        },
        {
          "genre": "мелодрама"
        }
      ],
      "duration": null,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 2000120,
      "nameRu": "Крецул",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/2000120.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/2000120.jpg",
      "countries": [
        {
          "country": "Россия"
        },
        {
          "country": "Молдова"
        },
        {
          "country": "Литва"
        }
      ],
      "genres": [
        {
          "genre": "биография"
        },
        {
          "genre": "драма"
        },
        {
          "genre": "спорт"
        }
      ],
      "duration": 104,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 4478081,
      "nameRu": "Костолом",
      "nameEn": "Ruthless",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4478081.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4478081.jpg",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "боевик"
        },
        {
          "genre": "триллер"
        }
      ],
      "duration": 92,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 5395412,
      "nameRu": "Контроль",
      "nameEn": "Control",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5395412.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5395412.jpg",
      "countries": [
        {
          "country": "Великобритания"
        }
      ],
      "genres": [
        {
          "genre": "боевик"
        },
        {
          "genre": "триллер"
        }
      ],
      "duration": null,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 5231804,
      "nameRu": "Заклятие. Зарождение зла",
      "nameEn": "Auxilio",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5231804.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5231804.jpg",
      "countries": [
        {
          "country": "Аргентина"
        }
      ],
      "genres": [
        {
          "genre": "ужасы"
        }
      ],
      "duration": 80,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 4697342,
      "nameRu": "Что случилось с Хелен",
      "nameEn": "Helen's Dead",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4697342.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4697342.jpg",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "триллер"
        },
        {
          "genre": "драма"
        },
        {
          "genre": "комедия"
        }
      ],
      "duration": 84,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 5419203,
      "nameRu": "Робокар Поли: Приключение в пустыне!",
      "nameEn": "Robocar Poli",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5419203.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5419203.jpg",
      "countries": [
        {
          "country": "Корея Южная"
        }
      ],
      "genres": [
        {
          "genre": "мультфильм"
        },
        {
          "genre": "детский"
        },
        {
          "genre": "приключения"
        }
      ],
      "duration": 50,
      "premiereRu": "2023-12-14"
    },
    {
      "kinopoiskId": 944846,
      "nameRu": "Феррари",
      "nameEn": "Ferrari",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/944846.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/944846.jpg",
      "countries": [
        {
          "country": "США"
        },
        {
          "country": "Великобритания"
        },
        {
          "country": "Италия"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "биография"
        },
        {
          "genre": "история"
        }
      ],
      "duration": 130,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 5313457,
      "nameRu": "Вредная привычка",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5313457.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5313457.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        }
      ],
      "duration": null,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 5318704,
      "nameRu": "Крик. Ночь перед Рождеством",
      "nameEn": "It's a Wonderful Knife",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5318704.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5318704.jpg",
      "countries": [
        {
          "country": "Великобритания"
        },
        {
          "country": "США"
        },
        {
          "country": "Канада"
        }
      ],
      "genres": [
        {
          "genre": "ужасы"
        },
        {
          "genre": "комедия"
        },
        {
          "genre": "фантастика"
        }
      ],
      "duration": 87,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 633277,
      "nameRu": "Бойцы на всю голову",
      "nameEn": "The Fight Machine",
      "year": 2022,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/633277.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/633277.jpg",
      "countries": [
        {
          "country": "Канада"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "спорт"
        },
        {
          "genre": "боевик"
        }
      ],
      "duration": 104,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 5270497,
      "nameRu": "Новогодний ол инклюзив",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5270497.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5270497.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        },
        {
          "genre": "семейный"
        }
      ],
      "duration": 90,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 4413063,
      "nameRu": "Последний стрелок",
      "nameEn": "The Last Rifleman",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4413063.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4413063.jpg",
      "countries": [
        {
          "country": "Великобритания"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "биография"
        },
        {
          "genre": "военный"
        }
      ],
      "duration": 95,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 4922711,
      "nameRu": "Великая магия",
      "nameEn": "Il sol dell'avvenire",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4922711.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4922711.jpg",
      "countries": [
        {
          "country": "Италия"
        },
        {
          "country": "Франция"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "комедия"
        }
      ],
      "duration": 95,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 1370306,
      "nameRu": "Мистер и Миссис Икс",
      "nameEn": "Killing romaenseu",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1370306.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1370306.jpg",
      "countries": [
        {
          "country": "Корея Южная"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        },
        {
          "genre": "мелодрама"
        }
      ],
      "duration": 107,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 4934819,
      "nameRu": "Дунки",
      "nameEn": "Dunki",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4934819.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4934819.jpg",
      "countries": [
        {
          "country": "Индия"
        }
      ],
      "genres": [
        {
          "genre": "драма"
        },
        {
          "genre": "комедия"
        }
      ],
      "duration": 160,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 4947525,
      "nameRu": "Рождество в подарок",
      "nameEn": "Improvvisamente Natale",
      "year": 2022,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4947525.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4947525.jpg",
      "countries": [
        {
          "country": "Италия"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        }
      ],
      "duration": 105,
      "premiereRu": "2023-12-21"
    },
    {
      "kinopoiskId": 5418908,
      "nameRu": "Театр в кино: Щелкунчик",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5418908.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5418908.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "музыка"
        }
      ],
      "duration": 88,
      "premiereRu": "2023-12-26"
    },
    {
      "kinopoiskId": 4489198,
      "nameRu": "Три богатыря и Пуп Земли",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4489198.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4489198.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "мультфильм"
        },
        {
          "genre": "приключения"
        },
        {
          "genre": "семейный"
        }
      ],
      "duration": null,
      "premiereRu": "2023-12-28"
    },
    {
      "kinopoiskId": 5117299,
      "nameRu": "Великолепная пятерка",
      "nameEn": "",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5117299.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5117299.jpg",
      "countries": [
        {
          "country": "Россия"
        }
      ],
      "genres": [
        {
          "genre": "мультфильм"
        }
      ],
      "duration": null,
      "premiereRu": "2023-12-28"
    },
    {
      "kinopoiskId": 5025649,
      "nameRu": "Реинкарнация. Картины с того света",
      "nameEn": "Cracked",
      "year": 2022,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5025649.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5025649.jpg",
      "countries": [
        {
          "country": "Таиланд"
        },
        {
          "country": "Корея Южная"
        }
      ],
      "genres": [
        {
          "genre": "ужасы"
        }
      ],
      "duration": 93,
      "premiereRu": "2023-12-28"
    },
    {
      "kinopoiskId": 4653627,
      "nameRu": "Идеальные друзья",
      "nameEn": "The Trouble with Jessica",
      "year": 2023,
      "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4653627.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4653627.jpg",
      "countries": [
        {
          "country": "Великобритания"
        }
      ],
      "genres": [
        {
          "genre": "комедия"
        }
      ],
      "duration": null,
      "premiereRu": "2023-12-28"
    }
  ]

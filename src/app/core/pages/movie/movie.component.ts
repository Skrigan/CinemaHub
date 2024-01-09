import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {getMovieType} from "../../utils";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  movie: any = {
    "fees": {
      "world": {
        "value": 4180000,
        "currency": "$"
      },
      "russia": {
        "value": 4180000,
        "currency": "$"
      }
    },
    "status": null,
    "externalId": {
      "tmdb": 20994,
      "imdb": "tt0420982"
    },
    "rating": {
      "kp": 7.232,
      "imdb": 7.2,
      "filmCritics": 0,
      "russianFilmCritics": 0,
      "await": null
    },
    "votes": {
      "kp": 378839,
      "imdb": 8620,
      "filmCritics": 0,
      "russianFilmCritics": 2,
      "await": 0
    },
    "backdrop": {
      "url": "https://imagetmdb.com/t/p/original/3HypwT6ccX45yG1NmMyLQP7tJeb.jpg",
      "previewUrl": "https://imagetmdb.com/t/p/w500/3HypwT6ccX45yG1NmMyLQP7tJeb.jpg"
    },
    "movieLength": 111,
    "images": {
      "framesCount": 47
    },
    "productionCompanies": [
      {
        "name": "CTB Film Company",
        "url": "https://www.themoviedb.org/t/p/original/q0UG4oZERwIywJdDPF4lRlvdYGW.png",
        "previewUrl": "https://www.themoviedb.org/t/p/w500/q0UG4oZERwIywJdDPF4lRlvdYGW.png"
      }
    ],
    "spokenLanguages": [
      {
        "name": "English",
        "nameEn": "English"
      },
      {
        "name": "Pусский",
        "nameEn": "Russian"
      }
    ],
    "id": 84830,
    "type": "movie",
    "name": "Жмурки",
    "description": "Жмурки — старинная русская игра: водящий, с завязанными глазами, ловит остальных играющих. К середине 1990-х правила игры изменились: выигрывает тот, кто останется в живых, сделав жмуриками остальных. \n\nНижний Новгород. Два мелких бандита Серега и Саймон работают на крупного бандюгана Сергея Михайловича. Только вот очередное его поручение парни провалили: он велел привезти химика, колдовавшего над созданием новой порции белого порошка, а Серега и Саймон устроили в лаборатории бойню. \n\nСергей Михайлович сильно рассердился, но ограничился устным внушением, после чего дал парням другое поручение: съездить в адвокатскую контору и обменять чемоданчик с деньгами на чемоданчик с героином. Но и тут Сереге и Саймону не повезло. Обмен состоялся, только на выходе из конторы их встретили три бандита Корон, Бала и Баклажан, которых нанял старший лейтенант милиции Степан — «оборотень в погонах», мечтающий кинуть Сергея Михайловича по-крупному.",
    "distributors": {
      "distributor": "Наше Кино",
      "distributorRelease": "Монолит, Союз-Видео"
    },
    "premiere": {
      "world": "2005-05-27T00:00:00.000Z",
      "russia": "2005-05-26T00:00:00.000Z",
      "bluray": "2009-07-09T00:00:00.000Z",
      "dvd": "2009-06-18T00:00:00.000Z"
    },
    "slogan": "Для тех, кто выжил в 90-е",
    "year": 2005,
    "poster": {
      "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/3aa869c1-2f77-4f8c-a614-b13f80cca687/orig",
      "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/3aa869c1-2f77-4f8c-a614-b13f80cca687/x1000"
    },
    "facts": [
      {
        "value": "Большинство актёров были утверждены на свои роли без всяких проб.",
        "type": "FACT",
        "spoiler": false
      },
      {
        "value": "В ранней версии сценария фильма было 18 трупов.",
        "type": "FACT",
        "spoiler": false
      },
      {
        "value": "В ходе съёмок было израсходовано 50 литров фальшивой крови.",
        "type": "FACT",
        "spoiler": false
      },
      {
        "value": "В фильме есть персонаж по имени Кабан, взятый из сериала &#171;<a href=\"/film/77039/\" class=\"all\">Бригада</a>&#187; (2002), где о нём только упоминается.",
        "type": "FACT",
        "spoiler": false
      },
      {
        "value": "Хотя фильм снимался в Нижнем Новгороде, на автомобиле Михалыча видны санкт-петербургские номера.",
        "type": "FACT",
        "spoiler": false
      },
      {
        "value": "Рабочее название фильма — &laquo;Кавардак&raquo;.",
        "type": "FACT",
        "spoiler": false
      },
      {
        "value": "На МКФ в Хельсинки (Финляндия) фильм был представлен под названием &laquo;Блеф мертвеца&raquo;.",
        "type": "FACT",
        "spoiler": false
      },
      {
        "value": "В США фильм демонстрировался под прокатным названием &laquo;Блеф слепца&raquo;.",
        "type": "FACT",
        "spoiler": false
      }
    ],
    "genres": [
      {
        "name": "комедия"
      },
      {
        "name": "криминал"
      }
    ],
    "countries": [
      {
        "name": "Россия"
      }
    ],
    "seasonsInfo": [],
    "persons": [
      {
        "id": 231399,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_231399.jpg",
        "name": "Алексей Панин",
        "enName": null,
        "description": "Сергей",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 539454,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_539454.jpg",
        "name": "Дмитрий Дюжев",
        "enName": null,
        "description": "Саймон",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 101749,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_101749.jpg",
        "name": "Никита Михалков",
        "enName": null,
        "description": "Сергей Михайлович (Михалыч)",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 64250,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_64250.jpg",
        "name": "Сергей Маковецкий",
        "enName": null,
        "description": "Корон",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 64253,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_64253.jpg",
        "name": "Виктор Сухоруков",
        "enName": null,
        "description": "Степан",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 231196,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_231196.jpg",
        "name": "Григорий Сиятвинда",
        "enName": null,
        "description": "Баклажан",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 40174,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_40174.jpg",
        "name": "Анатолий Журавлев",
        "enName": null,
        "description": "Бала",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 261693,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_261693.jpg",
        "name": "Гарик Сукачев",
        "enName": null,
        "description": "Мозг",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 251184,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_251184.jpg",
        "name": "Алексей Серебряков",
        "enName": null,
        "description": "доктор",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 224368,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_224368.jpg",
        "name": "Андрей Панин",
        "enName": null,
        "description": "Архитектор",
        "profession": "актеры",
        "enProfession": "actor"
      },
      {
        "id": 75867,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_75867.jpg",
        "name": "Вячеслав Бутусов",
        "enName": null,
        "description": null,
        "profession": "композиторы",
        "enProfession": "composer"
      },
      {
        "id": 2004911,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2004911.jpg",
        "name": "Татьяна Патрахальцева",
        "enName": null,
        "description": null,
        "profession": "художники",
        "enProfession": "designer"
      },
      {
        "id": 2008028,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2008028.jpg",
        "name": "Константин Пахотин",
        "enName": null,
        "description": null,
        "profession": "художники",
        "enProfession": "designer"
      },
      {
        "id": 64249,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_64249.jpg",
        "name": "Алексей Балабанов",
        "enName": null,
        "description": null,
        "profession": "режиссеры",
        "enProfession": "director"
      },
      {
        "id": 2009692,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2009692.jpg",
        "name": "Татьяна Кузьмичева",
        "enName": null,
        "description": null,
        "profession": "монтажеры",
        "enProfession": "editor"
      },
      {
        "id": 676835,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_676835.jpg",
        "name": "Евгений Привин",
        "enName": null,
        "description": null,
        "profession": "операторы",
        "enProfession": "operator"
      },
      {
        "id": 674220,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_674220.jpg",
        "name": "Сергей Долгошеин",
        "enName": null,
        "description": null,
        "profession": "продюсеры",
        "enProfession": "producer"
      },
      {
        "id": 39446,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_39446.jpg",
        "name": "Сергей Сельянов",
        "enName": null,
        "description": null,
        "profession": "продюсеры",
        "enProfession": "producer"
      },
      {
        "id": 64265,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_64265.jpg",
        "name": "Юрий Гальцев",
        "enName": null,
        "description": null,
        "profession": "актеры дубляжа",
        "enProfession": "voice_actor"
      },
      {
        "id": 231399,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_231399.jpg",
        "name": "Алексей Панин",
        "enName": null,
        "description": null,
        "profession": "актеры дубляжа",
        "enProfession": "voice_actor"
      },
      {
        "id": 64249,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_64249.jpg",
        "name": "Алексей Балабанов",
        "enName": null,
        "description": null,
        "profession": "редакторы",
        "enProfession": "writer"
      },
      {
        "id": 603923,
        "photo": "https://st.kp.yandex.net/images/actor_iphone/iphone360_603923.jpg",
        "name": "Стас Мохначев",
        "enName": null,
        "description": null,
        "profession": "редакторы",
        "enProfession": "writer"
      }
    ],
    "lists": [
      "popular-films",
      "hd"
    ],
    "typeNumber": 1,
    "alternativeName": null,
    "enName": "Blind Man's Bluff",
    "names": [
      {
        "name": "Жмурки"
      },
      {
        "name": "Zhmurki",
        "language": "RU",
        "type": "transliteration"
      },
      {
        "name": "Blind Man's Bluff",
        "language": "US",
        "type": null
      }
    ],
    "ageRating": 18,
    "budget": {},
    "ratingMpaa": null,
    "updateDates": [
      "2021-09-27T19:54:27.000Z",
      "2021-09-29T16:27:38.000Z"
    ],
    "sequelsAndPrequels": [],
    "updatedAt": "2024-01-09T01:00:07.798Z",
    "similarMovies": [
      {
        "id": 522,
        "name": "Карты, деньги, два ствола",
        "enName": null,
        "alternativeName": "Lock, Stock and Two Smoking Barrels",
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/x1000"
        }
      },
      {
        "id": 41519,
        "name": "Брат",
        "enName": null,
        "alternativeName": null,
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/x1000"
        }
      },
      {
        "id": 77039,
        "name": "Бригада",
        "enName": null,
        "alternativeName": null,
        "type": "tv-series",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/2b1296bf-c7d7-4bf3-bcc6-8b2505cc8cc7/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/2b1296bf-c7d7-4bf3-bcc6-8b2505cc8cc7/x1000"
        }
      },
      {
        "id": 57166,
        "name": "Бумер",
        "enName": null,
        "alternativeName": null,
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/06488fb4-6135-46a1-8850-321fba3f9af7/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/06488fb4-6135-46a1-8850-321fba3f9af7/x1000"
        }
      },
      {
        "id": 342,
        "name": "Криминальное чтиво",
        "enName": null,
        "alternativeName": "Pulp Fiction",
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/x1000"
        }
      },
      {
        "id": 526,
        "name": "Большой куш",
        "enName": null,
        "alternativeName": "Snatch",
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/47fe48f6-ff17-4411-a12f-d337bea2639d/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/47fe48f6-ff17-4411-a12f-d337bea2639d/x1000"
        }
      },
      {
        "id": 679554,
        "name": "Всё и сразу",
        "enName": null,
        "alternativeName": null,
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/70b94b27-d742-42d9-ac43-3e28b2cf5969/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/70b94b27-d742-42d9-ac43-3e28b2cf5969/x1000"
        }
      },
      {
        "id": 542574,
        "name": "Бабло",
        "enName": null,
        "alternativeName": null,
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/8c415eb5-e371-41e6-ad7a-7caaec6e962d/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/8c415eb5-e371-41e6-ad7a-7caaec6e962d/x1000"
        }
      },
      {
        "id": 491889,
        "name": "Чужая",
        "enName": null,
        "alternativeName": null,
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f6ba67a9-f5a8-49ed-929a-720ca624087a/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f6ba67a9-f5a8-49ed-929a-720ca624087a/x1000"
        }
      },
      {
        "id": 41520,
        "name": "Брат 2",
        "enName": null,
        "alternativeName": null,
        "type": "movie",
        "poster": {
          "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/80eab631-346c-4c29-b14d-1fa1438158f9/orig",
          "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/80eab631-346c-4c29-b14d-1fa1438158f9/x1000"
        }
      }
    ],
    "shortDescription": "Бандиты, черный юмор и много крови. Алексей Балабанов примеряет стиль Квентина Тарантино на Россию 1990-х",
    "technology": {
      "hasImax": false,
      "has3D": false
    },
    "ticketsOnSale": false,
    "imagesInfo": {
      "framesCount": 47
    },
    "logo": {
      "url": "https://avatars.mds.yandex.net/get-ott/1652588/2a0000017f889317c12a492b74af8ca6b314/orig"
    },
    "watchability": {
      "items": [
        {
          "name": "Kinopoisk HD",
          "logo": {
            "url": "https://yastatic.net/s3/kinopoisk-frontend/hd-www/release/apple-touch-icon-180x180.png"
          },
          "url": "https://hd.kinopoisk.ru/?rt=4ccbc7ac051d733ba196813999198b58"
        },
        {
          "name": "Okko",
          "logo": {
            "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
          },
          "url": "https://okko.tv/movie/zhmurki?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
        },
        {
          "name": "Иви",
          "logo": {
            "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
          },
          "url": "https://www.ivi.ru/watch/33509?utm_source=yandex&utm_medium=wizard"
        },
        {
          "name": "KION",
          "logo": {
            "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
          },
          "url": "https://kion.ru/video/movie/278952135?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
        },
        {
          "name": "PREMIER",
          "logo": {
            "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
          },
          "url": "https://premier.one/show/9718?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
        },
        {
          "name": "Wink",
          "logo": {
            "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
          },
          "url": "https://wink.ru/media_items/70751004?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
        },
        {
          "name": "viju",
          "logo": {
            "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
          },
          "url": "https://viju.ru/filmy/zhmurki?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
        }
      ]
    },
    "top10": null,
    "top250": null,
    "deletedAt": null,
    "isSeries": false,
    "seriesLength": null,
    "totalSeriesLength": null,
    "networks": null,
    "videos": {
      "trailers": [
        {
          "url": "https://www.youtube.com/embed/YNQAE14f_Fg",
          "name": "Жмурки - Trailer",
          "site": "youtube",
          "type": "TRAILER"
        },
        {
          "url": "https://www.youtube.com/embed/YNQAE14f_Fg",
          "name": "Жмурки - Trailer",
          "site": "youtube",
          "type": "TRAILER"
        }
      ]
    }
  };
  subscriptions: Subscription[] = [];
  directors!: any[];
  actors!: any[];
  movieType!: string;

  isImgLoaded = false;
  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // this.subscriptions.push(
    //   this.route.params.subscribe((params: Params) => {
    //     if (params.hasOwnProperty('id')) {
    //       this.getMovieById(params['id']);
    //     }
    //   })
    // )
  }

  getMovieById(id: number) {
    this.subscriptions.push(
      this.movieService.getMovieById(id).subscribe((movie) => {
        this.movie = movie;

        const persons = this.movie.persons;
        this.actors = persons.filter((person: any) => {
          return person.enProfession === 'actor';
        });

        this.directors = persons.filter((person: any) => {
          return person.enProfession === 'director';
        });

        this.movieType = getMovieType(this.movie.typeNumber);
      }
    ))
  }

  onMovieChoice(event: MouseEvent) {
    const target = <HTMLElement>event.target;
    const movieCard = target.closest('.films__card');

    if (movieCard !== null) {
      const id = movieCard.getAttribute('data-id')!;
      this.movie = undefined;
      this.router.navigate(['/movie', id]);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}

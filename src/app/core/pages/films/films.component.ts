import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { genres, ratings, sortFields, years } from "../../data/filters";

import {ActivatedRoute, Router} from "@angular/router";
import {IMovie} from "../../interfaces/IMovie";
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";

const infoFromPath: any = {
  "films": {
    "title": "Фильмы",
    "typeNumber": 1
  },
  "series": {
    "title": "Серилы",
    "typeNumber": 2
  },
  "cartoons": {
    "title": "Мультфильмы",
    "typeNumber": 3
  },
  "anime": {
    "title": "Аниме",
    "typeNumber": 4
  },
  "animated-series": {
    "title": "Мультсериалы",
    "typeNumber": 5
  },
}

export type SearchParams = {
  'typeNumber': number
  'genres.name': string | null
  'year': string | null
  'rating.kp': string | null
  'sortField': string
  'page': string,
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
})
export class FilmsComponent implements OnInit, OnDestroy {
  protected readonly parseInt = parseInt;
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: WheelEvent) {
  //   const windowHeight = window.innerHeight;
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const currentScroll = document.documentElement.scrollTop + windowHeight;
  //
  //   const shownCardsLength = this.shownCards.length;
  //   const cardsLength = this.cards.length;
  //   if (currentScroll >= scrollHeight && shownCardsLength < cardsLength) {
  //     console.log('scrolled!');
  //     const lengthDiff = cardsLength - shownCardsLength;
  //     console.log(`slice(${shownCardsLength}, ${lengthDiff >= 60 ? shownCardsLength + 60 : shownCardsLength + lengthDiff})`);
  //     this.shownCards.push(...this.cards.slice(shownCardsLength, lengthDiff >= 60 ? shownCardsLength + 60 : shownCardsLength + lengthDiff));
  //   }
  // }

  @ViewChild('films') films!: ElementRef;

  title!: string;
  //!!! убрать нахуй
  cards: IMovie[] = [];
  lastPage: number = 0;

  subscriptions: Subscription[] = [];

  genres = genres;
  years = years;
  ratings = ratings;
  sortFields = sortFields;

  searchParams!: SearchParams
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {
  }

  ngOnInit() {
    const key = this.route.snapshot.routeConfig?.path!;
    this.title = infoFromPath[key].title;

    this.route.queryParams.subscribe((params) => {
      this.searchParams = {
        'typeNumber': infoFromPath[key].typeNumber,
        'genres.name': null,
        'year': null,
        'rating.kp': null,
        'sortField': 'votes.kp',
        'page': '1',
      }
      for (let param in params) {
        // @ts-ignore
        this.searchParams[param] = params[param];
      }
      this.getMoviesData();
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  changePage(page: number) {
    const params = {
      'page': page.toString()
    }
    this.changeQueryParams(params)
  }

  getGenre(genre: string | null) {
    const params = {
      'genres.name': genre,
      'page': null
    }
    this.changeQueryParams(params);
  }

  getYear(year: string | null) {
    const params = {
      'year': year,
      'page': null
    }
    this.changeQueryParams(params);
  }

  getRating(rating: string | null) {
    const params = {
      'rating.kp': rating,
      'page': null
    }
    this.changeQueryParams(params);
  }

  onMovieChoice(event: MouseEvent) {
    const target = <HTMLElement>event.target;
    const movieCard = target.closest('.films__card');

    if (movieCard !== null) {
     const id = movieCard.getAttribute('data-id')!;
     this.router.navigate(['/movie', id]);
    }
  }

  getSort(sortField: string) {
    const params = {
      'sortField': sortField,
      'page': null
    }
    this.changeQueryParams(params);
  }

  changeQueryParams(params: {[key: string]: string | null}) {
    this.cards.length = 0;
    this.lastPage = 0;
    this.router.navigate([], {
      queryParams: params,
      queryParamsHandling: 'merge',
    })
  }

  getMoviesData() {
    this.subscriptions.push(this.movieService.getMoviesData(this.searchParams).subscribe((response) => {
      if (response.total > 0) {
        this.cards = response.docs;
        this.lastPage = response.pages;
      } else {
        ///???
      }
    }));
  }
}

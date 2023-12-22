import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  "animated-series": {
    "title": "Мультсериалы",
    "typeNumber": 5
  },
  "anime": {
    "title": "Аниме",
    "typeNumber": 4
  }
}

export type SearchParams = {
  'typeNumber': number
  'genres.name': string | null
  'year': string | null
  'rating.kp': string | null
  'sortField': string
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit, OnDestroy {
  @ViewChild('films') films!: ElementRef;

  title!: string;
  shownCards: IMovie[] = [];
  cards: IMovie[] = [];

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

  getGenre(genre: string | null) {
    this.addQueryParameter('genres.name', genre);
  }

  getYear(year: string | null) {
    this.addQueryParameter('year', year);
  }

  getRating(rating: string | null) {
    this.addQueryParameter('rating.kp', rating);
  }

  getSort(sortField: string) {
    this.addQueryParameter('sortField', sortField);
  }

  addQueryParameter(key: string, value: string | null) {
    this.router.navigate([], {
      queryParams: { [key]: value },
      queryParamsHandling: 'merge',
    })
  }

  getMoviesData() {
    this.subscriptions.push(this.movieService.getMoviesData(this.searchParams).subscribe((response) => {
      this.cards = response.docs.slice();
      this.shownCards = this.cards.slice(0, 60);
      // console.log(response);
      // console.log(this.cards);
      // console.log(this.shownCards);
    }));
  }
}

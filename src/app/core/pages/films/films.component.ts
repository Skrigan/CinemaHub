import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { genres, ratings, sortFields, years } from "../../data/filters";

import {ActivatedRoute, Router} from "@angular/router";
import {Movie} from "../../interfaces/Movie";
import {MovieService} from "../../services/movie.service";

const typeFromPath: any = {
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
    "typeNumber": [3, 5]
  },
  "anime": {
    "title": "Аниме",
    "typeNumber": 4
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
export class FilmsComponent implements OnInit {
  protected readonly parseInt = parseInt;
  @ViewChild('films') films!: ElementRef;

  title!: string;
  cards: Movie[] = [];
  lastPage: number = 0;

  genres = genres;
  years = years;
  ratings = ratings;
  sortFields = sortFields;

  searchParams!: SearchParams
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {
  }

  ngOnInit() {
    const key = this.route.snapshot.routeConfig?.path!;
    this.title = typeFromPath[key].title;

    this.route.queryParams.subscribe((params) => {
      this.searchParams = {
        'typeNumber': typeFromPath[key].typeNumber,
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
    this.movieService.getMoviesData(this.searchParams).subscribe((response) => {
      this.cards = response.docs;
      this.lastPage = response.pages;
    });
  }
}

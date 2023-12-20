import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { genres, ratings, sortings, years} from "../../data/filters";
import { mockedMovies } from "../../data/mockedMovies";
import { mockedSeries } from "../../data/mockedSeries";
import { mockedCartoons } from "../../data/mockedCartoons";
import { mockedAnimatedSeries } from "../../data/mockedAnimated-Series";
import { mockedAnime } from "../../data/mockedAnime";

import {ActivatedRoute, Router} from "@angular/router";
import {IMovie} from "../../interfaces/IMovie";
import {HttpParams} from "@angular/common/http";

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

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit, AfterViewInit{
  @ViewChild('films') films!: ElementRef;

  title!: string;
  cards!: IMovie[];

  genres = genres;
  years = years;
  ratings = ratings;
  sortings = sortings;

  // genre: string | null = null;
  // year: string | null = null;
  // rating: string | null = null;
  // sort: string | null = null;

  searchParams!: {
    typeNumber: number
    genre: string | null,
    year: string | null,
    rating: string | null,
    sortField: string,
  };
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log('init!!')
    const key = this.route.snapshot.routeConfig?.path!;
    this.title = infoFromPath[key].title;
    this.searchParams = {
      typeNumber: infoFromPath[key].typeNumber,
      genre: null,
      year: null,
      rating: null,
      sortField: 'votes.kp',
    }
    const startParams = this.route.snapshot.queryParams;
    for (let param in startParams) {
      // @ts-ignore
      this.searchParams[param] = startParams[param];
    }
    console.log(this.searchParams);

    // switch (key) {
    //   case "films": this.cards = mockedMovies
    //     break
    //   case "series": this.cards = mockedSeries
    //     break
    //   case "cartoons": this.cards = mockedCartoons
    //     break
    //   case "animated-series": this.cards = mockedAnimatedSeries
    //     break
    //   case "anime": this.cards = mockedAnime
    //     break
    // }
  }

  ngAfterViewInit() {
    const cards: HTMLElement[] = Array.from(this.films.nativeElement.children);
    cards.forEach((card) => {
      card.style.minWidth = `calc((100% - ${(6 - 1)}vw) / 6)`;
      card.style.width = `calc((100% - ${(6 - 1)}vw) / 6)`;
    })
  }

  getGenre(genre: string | null) {
    this.addQueryParameter('genre', genre);
  }

  getYear(year: string | null) {
    this.addQueryParameter('year', year);
  }

  getRating(rating: string | null) {
    this.addQueryParameter('rating', rating);
  }

  getSort(sortField: string) {
    this.addQueryParameter('sortField', sortField);
  }

  addQueryParameter(key: string, value: string | null) {
    this.router.navigate([], {
      queryParams: { [key]: value },
      queryParamsHandling: 'merge',
    })
    // @ts-ignore
    this.searchParams[key] = value;
    console.log(this.searchParams);
  }
}

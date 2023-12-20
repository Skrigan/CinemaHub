import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { genres, ratings, sortFields, years} from "../../data/filters";

import {ActivatedRoute, Router} from "@angular/router";
import {IMovie} from "../../interfaces/IMovie";

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
  sortFields = sortFields;

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
    const key = this.route.snapshot.routeConfig?.path!;
    this.title = infoFromPath[key].title;
    this.route.queryParams.subscribe((params) => {
      this.searchParams = {
        typeNumber: infoFromPath[key].typeNumber,
        genre: null,
        year: null,
        rating: null,
        sortField: 'votes.kp',
      }
      for (let param in params) {
        // @ts-ignore
        this.searchParams[param] = params[param];
      }
    })
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
  }
}

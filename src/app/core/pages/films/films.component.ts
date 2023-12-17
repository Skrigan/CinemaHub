import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {filters, ratings, sortings, years} from "../../data/filters";
import {mockedMovies} from "../../data/mockedMovies";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements AfterViewInit{
  @ViewChild('films') films!: ElementRef;
  mockedMovies = mockedMovies;

  genres= filters;
  years = years;
  ratings = ratings;
  sortings = sortings;

  genre: string | null = null;
  year: string | null = null;
  rating: string | null = null;
  sort: string | null = null;

  ngAfterViewInit() {
    const cards: HTMLElement[] = Array.from(this.films.nativeElement.children);
    cards.forEach((card) => {
      card.style.minWidth = `calc((100% - ${(6 - 1)}vw) / 6)`;
      card.style.width = `calc((100% - ${(6 - 1)}vw) / 6)`;
    })
  }

  getGenre(genre: string | null) {
    this.genre = genre;
  }

  getYear(year: string | null) {
    this.year = year;
  }

  getRating(rating: string | null) {
    this.rating = rating;
  }

  getSort(sort: string | null) {
    this.sort = sort;
  }
}

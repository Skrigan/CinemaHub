import { Component } from '@angular/core';
import { mockedReleases } from '../../data/mockedReleases';
import { mockedMovies } from '../../data/mockedMovies';
import { mockedSeries } from '../../data/mockedSeries';
import { mockedCartoons } from '../../data/mockedCartoons';
import { mockedAnime } from '../../data/mockedAnime';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  protected readonly mockedReleases = mockedReleases;
  protected readonly mockedMovies = mockedMovies;
  protected readonly mockedSeries = mockedSeries;
  protected readonly mockedCartoons = mockedCartoons;
  protected readonly mockedAnime = mockedAnime;

  constructor(private router: Router) {
  }

  onMovieChoice(event: MouseEvent) {
    const target = <HTMLElement>event.target;
    const movieCard = target.closest('.films__card');

    if (movieCard !== null) {
      const id = movieCard.getAttribute('data-id')!;
      this.router.navigate(['/movie', id]);
    }
  }
}

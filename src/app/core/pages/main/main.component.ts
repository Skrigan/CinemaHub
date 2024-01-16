import { Component } from '@angular/core';
// import { mockedReleases } from '../../data/mockedReleases';
import { mockedMovies } from '../../data/mockedMovies';
import { mockedSeries } from '../../data/mockedSeries';
import { mockedCartoons } from '../../data/mockedCartoons';
import { mockedAnime } from '../../data/mockedAnime';
import {Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  // protected readonly mockedReleases = mockedReleases;
  releases?: any;
  protected readonly mockedMovies = mockedMovies;
  protected readonly mockedSeries = mockedSeries;
  protected readonly mockedCartoons = mockedCartoons;
  protected readonly mockedAnime = mockedAnime;

  constructor(private router: Router, private movieService: MovieService) {
    movieService.releases$.subscribe((value: any) => {
      const releases = [...value.currentMonthReleases.items, ...value.nextMonthReleases.items];
      const currentDate = new Date();
      this.releases = releases.filter((release) => {
        const releaseDate = new Date(release.premiereRu);
        if (
          releaseDate.getFullYear() === currentDate.getFullYear() &&
          releaseDate.getMonth() === currentDate.getMonth() &&
          releaseDate.getDate() === currentDate.getDate()
        ) {
          return true
        } else {
          return releaseDate >= currentDate;
        }
      }).slice(0, 16);
    })
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

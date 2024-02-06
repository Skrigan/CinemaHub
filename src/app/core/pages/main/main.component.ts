import { Component } from '@angular/core';
import { mockedMovies } from '../../data/mockedMovies';
import { mockedSeries } from '../../data/mockedSeries';
import { mockedCartoons } from '../../data/mockedCartoons';
import { mockedAnime } from '../../data/mockedAnime';
import {Router} from "@angular/router";
import {PremiereService} from "../../services/premiere.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  premieres?: any;
  protected readonly mockedMovies = mockedMovies;
  protected readonly mockedSeries = mockedSeries;
  protected readonly mockedCartoons = mockedCartoons;
  protected readonly mockedAnime = mockedAnime;

  constructor(private router: Router, private premiereService: PremiereService) {
    premiereService.premieres$.subscribe((value: any) => {
      const premieres = [...value.currentMonthPremiere.items, ...value.nextMonthPremiere.items];
      const currentDate = new Date();
      this.premieres = premieres.filter((premiere) => {
        const premiereDate = new Date(premiere.premiereRu);
        if (
          premiereDate.getFullYear() === currentDate.getFullYear() &&
          premiereDate.getMonth() === currentDate.getMonth() &&
          premiereDate.getDate() === currentDate.getDate()
        ) {
          return true
        } else {
          return premiereDate >= currentDate;
        }
      }).slice(0, 20);
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

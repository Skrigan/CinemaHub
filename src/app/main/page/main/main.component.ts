import { Component, OnInit } from '@angular/core';
import { movies } from '../../mock/movies';
import { series } from '../../mock/series';
import { cartoons } from '../../mock/cartoons';
import { anime } from '../../mock/anime';
import { PremiereService } from "../../../core/services/premiere.service";
import {Premiere} from "../../../shared/types/Premiere";
import {take} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  premieres: Premiere[] = [];
  protected readonly mockedMovies = movies;
  protected readonly mockedSeries = series;
  protected readonly mockedCartoons = cartoons;
  protected readonly mockedAnime = anime;

  constructor(private premiereService: PremiereService) {
  }

  ngOnInit() {
    this.premiereService.premieres$.pipe(take(1)).subscribe((value) => {
      const premieres = value;
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
}

import { Component, OnInit } from '@angular/core';
import { mockedMovies } from '../../data/mockedMovies';
import { mockedSeries } from '../../data/mockedSeries';
import { mockedCartoons } from '../../data/mockedCartoons';
import { mockedAnime } from '../../data/mockedAnime';
import { PremiereService } from "../../services/premiere.service";
import {Premiere} from "../../types/Premiere";
import {take} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  premieres: Premiere[] = [];
  protected readonly mockedMovies = mockedMovies;
  protected readonly mockedSeries = mockedSeries;
  protected readonly mockedCartoons = mockedCartoons;
  protected readonly mockedAnime = mockedAnime;

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

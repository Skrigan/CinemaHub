import { Component } from '@angular/core';
import {mockedPremieres, mockedReleases} from "./core/interfaces/IRelease";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CinemaHub';
  protected readonly mockedPremieres = mockedPremieres;
  protected readonly mockedReleases = mockedReleases;
}

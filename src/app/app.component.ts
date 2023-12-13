import { Component } from '@angular/core';
import {IRelease, mockedPremieres, mockedReleases} from "./core/interfaces/IRelease";
import {mockedMovies} from "./core/interfaces/IMovie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CinemaHub';
  protected readonly mockedReleases = mockedReleases;
  protected readonly mockedMovies = mockedMovies.slice(0, 24);
  cardMinWidth!: string;


 ngOnInit() {
   this.cardMinWidth = `calc((100% - ${(4 - 1)}vw) / 4)`;
 }
  getCardInfo(card: IRelease) {
    return `${card.year}, ${card.countries[0].country}, ${card.genres[0].genre}`;
  }

}

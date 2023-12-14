import { Component } from '@angular/core';
import { IRelease } from "./core/interfaces/IRelease";
import { mockedMovies } from "./core/data/mockedMovies";
import { mockedReleases } from "./core/data/mockedReleases";
import { mockedSeries } from "./core/data/mockedSeries";
import { mockedCartoons } from "./core/data/mockedCartoons";
import { mockedAnimatedSeries } from "./core/data/mockedAnimated-Series";
import { mockedAnime } from "./core/data/mockedAnime";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CinemaHub';
  protected readonly mockedReleases = mockedReleases;
  protected readonly mockedMovies = mockedMovies.slice(0, 24);
  protected readonly mockedSeries = mockedSeries.slice(0, 24);
  protected readonly mockedCartoons = mockedCartoons.slice(0, 24);
  protected readonly mockedAnimatedSeries = mockedAnimatedSeries.slice(0, 24);
  protected readonly mockedAnime = mockedAnime.slice(0, 24);
  cardMinWidth!: string;


 ngOnInit() {
   this.cardMinWidth = `calc((100% - ${(4 - 1)}vw) / 4)`;
 }
  getCardInfo(card: IRelease) {
    return `${card.year}, ${card.countries[0].country}, ${card.genres[0].genre}`;
  }

}

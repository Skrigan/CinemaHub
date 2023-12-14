import { Component } from '@angular/core';
import { mockedReleases } from '../../data/mockedReleases';
import { mockedMovies } from '../../data/mockedMovies';
import { mockedSeries } from '../../data/mockedSeries';
import { mockedCartoons } from '../../data/mockedCartoons';
import { mockedAnimatedSeries } from '../../data/mockedAnimated-Series';
import { mockedAnime } from '../../data/mockedAnime';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  protected readonly mockedReleases = mockedReleases.slice(0, 16);
  protected readonly mockedMovies = mockedMovies.slice(0, 24);
  protected readonly mockedSeries = mockedSeries.slice(0, 24);
  protected readonly mockedCartoons = mockedCartoons.slice(0, 24);
  protected readonly mockedAnimatedSeries = mockedAnimatedSeries.slice(0, 24);
  protected readonly mockedAnime = mockedAnime.slice(0, 24);

}

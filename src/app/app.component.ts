import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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
export class AppComponent implements OnInit{
  @ViewChild('header', {read: ElementRef}) headerRef!: ElementRef;
  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.headerRef.nativeElement.classList.add('header_hidden');
    } else if (event.deltaY < 0) {
      this.headerRef.nativeElement.classList.remove('header_hidden');
    }
  }

  protected readonly mockedReleases = mockedReleases.slice(0, 16);
  protected readonly mockedMovies = mockedMovies.slice(0, 24);
  protected readonly mockedSeries = mockedSeries.slice(0, 24);
  protected readonly mockedCartoons = mockedCartoons.slice(0, 24);
  protected readonly mockedAnimatedSeries = mockedAnimatedSeries.slice(0, 24);
  protected readonly mockedAnime = mockedAnime.slice(0, 24);

  cardMinWidth!: string;

  ngOnInit() {
   this.cardMinWidth = `calc((100% - ${(4 - 1)}vw) / 4)`;
  }
}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/IMovie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  @Input({ required: true }) card: any;

  isImgLoaded = false;

  textInfo: string = '';

  ngOnInit() {
    if (this.card.year && this.card.countries && this.card.genres) {
      this.textInfo = `
      ${this.card.year},
      ${this.card.countries[0]?.name},
      ${this.card.genres[0]?.name}
    `
    }
  }
}

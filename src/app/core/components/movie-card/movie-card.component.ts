import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/IMovie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {
  @Input({ required: true }) card!: IMovie;
  textInfo: string = '';

  ngOnInit() {
    this.textInfo = `
      ${this.card.year},
      ${this.card.countries[0].name},
      ${this.card.genres[0].name}
    `
  }
}

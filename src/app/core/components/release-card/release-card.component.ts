import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';
import {IRelease} from "../../interfaces/IRelease";

enum ruMonth {
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
}

@Component({
  selector: 'app-release-card',
  templateUrl: './release-card.component.html',
  styleUrl: './release-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReleaseCardComponent implements OnInit {
  @Input({ required: true }) card!: IRelease;
  textInfo: string = '';

  ngOnInit() {
    const date = new Date(this.card.releaseDate);
    this.textInfo = `
      ${date.getDay()} ${ruMonth[date.getMonth()]},
      ${this.card.countries[0].country},
      ${this.card.genres[0].genre}
     `;
  }
}

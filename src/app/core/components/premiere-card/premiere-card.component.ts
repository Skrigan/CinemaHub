import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IPremiere} from "../../interfaces/IPremiere";
import {ruMonth} from "../../data/ruMonthEnum";


@Component({
  selector: 'app-premiere-card',
  templateUrl: './premiere-card.component.html',
  styleUrl: './premiere-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PremiereCardComponent implements OnInit {
  @Input({ required: true }) card!: IPremiere;

  isImgLoaded = false;

  textInfo: string = '';

  ngOnInit() {
    const date = new Date(this.card.premiereRu);
    this.textInfo = `
      ${date.getDate()} ${ruMonth[date.getMonth()]},
      ${this.card.countries[0].country},
      ${this.card.genres[0].genre}
     `;
  }
}

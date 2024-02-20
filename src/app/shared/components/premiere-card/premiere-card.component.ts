import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Premiere} from "src/app/shared/types/Premiere";
import {RuMonth} from "src/app/shared/enums/RuMonth";

@Component({
  selector: 'app-premiere-card',
  templateUrl: './premiere-card.component.html',
  styleUrl: './premiere-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PremiereCardComponent implements OnInit {
  @Input({ required: true }) card!: Premiere;

  isImgLoaded = false;

  textInfo: string = '';

  ngOnInit() {
    const date = new Date(this.card.premiereRu);
    this.textInfo = `
      ${date.getDate()} ${RuMonth[date.getMonth()]},
      ${this.card.countries[0].country},
      ${this.card.genres[0].genre}
     `;
  }
}

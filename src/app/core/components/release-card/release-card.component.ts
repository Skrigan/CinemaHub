import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IRelease} from "../../interfaces/IRelease";
import {ruMonth} from "../../data/ruMonthEnum";


@Component({
  selector: 'app-release-card',
  templateUrl: './release-card.component.html',
  styleUrl: './release-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReleaseCardComponent implements OnInit {
  @Input({ required: true }) card!: IRelease;

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

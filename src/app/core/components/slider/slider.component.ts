import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IRelease, mockedReleases} from "../../interfaces/IRelease";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
  @Input() cards!: any[];
  @Input() displayedImages: number = 3;
  protected cardMinWidth!: string;
  protected currentSlide = 0;

  @ViewChild('controlLeft', { static: true }) controlLeft!: ElementRef;
  @ViewChild('controlRight', { static: true }) controlRight!: ElementRef;
  @ViewChild('cardsRef', { static: true }) cardsRef!: ElementRef;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.cardMinWidth = `calc((100% - ${1.5 * (this.displayedImages - 1)}rem) / ${this.displayedImages})`;
    // this.http.get<any>('https://kinopoiskapiunofficial.tech/api/v2.1/films/releases', {
    //   headers: {
    //     'X-API-KEY': 'e4ef3242-e2cc-4ea4-933e-d4f1b854cafd',
    //     'Content-Type': 'application/json'
    //   },
    //   params: {
    //     year: 2023,
    //     month: 'DECEMBER',
    //     page: 1
    // }
    // }).subscribe(releases => {
    //   this.cards = releases.releases;
    // });
  }

  moveLeft(event: MouseEvent) {
    if (this.currentSlide === 0) {
      return;
    }
    this.currentSlide--;
    this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1.5rem * ${this.currentSlide}))`;
    this.controlRight.nativeElement.style.visibility = 'visible';
    if (this.currentSlide === 0) {
      (event.currentTarget as HTMLElement).style.visibility = 'hidden'
    }
  }
  moveRight(event: MouseEvent) {
    const maxSlide = Math.ceil(this.cards.length / this.displayedImages);
    if (this.currentSlide === maxSlide) {
      return;
    }
    this.currentSlide++;
    this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1.5rem * ${this.currentSlide}))`;
    this.controlLeft.nativeElement.style.visibility = 'visible';
    if (this.currentSlide === maxSlide - 1) {
      (event.currentTarget as HTMLElement).style.visibility = 'hidden'
    }
  }

  getCardInfo(card: IRelease) {
    return `${card.year}, ${card.countries[0].country}, ${card.genres[0].genre}`;
  }
}

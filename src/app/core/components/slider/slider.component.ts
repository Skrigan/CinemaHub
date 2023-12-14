import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit, AfterContentInit {
  @Input() displayedImages: number = 3;

  @ContentChildren('cards') cardList!: QueryList<any>;
  @ViewChild('controlLeft', { static: true }) controlLeft!: ElementRef;
  @ViewChild('controlRight', { static: true }) controlRight!: ElementRef;
  @ViewChild('cardsRef', { static: true }) cardsRef!: ElementRef;

  protected currentSlide = 0;
  protected cardMinWidth = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.cardMinWidth = `calc((100% - ${(this.displayedImages - 1)}vw) / ${this.displayedImages})`;
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

  ngAfterContentInit() {
    this.cardList.forEach((item) => {
      if (item.nativeElement) {
        item.nativeElement.style.minWidth = this.cardMinWidth;
      } else if (item.elementRef) {
        item.elementRef.nativeElement.style.minWidth = this.cardMinWidth;
      }
    })
  }

  moveLeft(event: MouseEvent) {
    if (this.currentSlide === 0) {
      return;
    }
    this.currentSlide--;
    this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1vw * ${this.currentSlide}))`;
    this.controlRight.nativeElement.style.visibility = 'visible';
    if (this.currentSlide === 0) {
      (event.currentTarget as HTMLElement).style.visibility = 'hidden'
    }
  }

  moveRight(event: MouseEvent) {
    const maxSlide = Math.ceil(this.cardList.length / this.displayedImages);
    if (this.currentSlide === maxSlide) {
      return;
    }
    this.currentSlide++;
    this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1vw * ${this.currentSlide}))`;
    this.controlLeft.nativeElement.style.visibility = 'visible';
    if (this.currentSlide === maxSlide - 1) {
      (event.currentTarget as HTMLElement).style.visibility = 'hidden'
    }
  }
}

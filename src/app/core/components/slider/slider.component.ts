import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit, AfterContentInit {
  @Input() displayedImages: number = 3;

  @ViewChild('controlLeft', { static: true }) controlLeft!: ElementRef;
  @ViewChild('controlRight', { static: true }) controlRight!: ElementRef;
  @ViewChild('cardsRef', { static: true }) cardsRef!: ElementRef;

  protected cards: HTMLElement[] = [];
  protected currentSlide = 0;
  protected cardMinWidth = '';

  ngOnInit() {
    this.cardMinWidth = `calc((100% - ${(this.displayedImages - 1)}vw) / ${this.displayedImages})`;
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    this.cards = Array.from(this.cardsRef.nativeElement.children);
    this.cards.forEach((item: HTMLElement) => {
        item.style.minWidth = this.cardMinWidth;
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
    const maxSlide = Math.ceil(this.cards.length / this.displayedImages);
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

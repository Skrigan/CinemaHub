import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements AfterContentChecked {
  @HostListener('window:resize', ['$event'])
  onResize(){
    this.checkControlVisibility();
  }

  @ViewChild('controlLeft', { static: true }) controlLeft!: ElementRef;
  @ViewChild('controlRight', { static: true }) controlRight!: ElementRef;
  @ViewChild('cardsRef', { static: true }) cardsRef!: ElementRef;

  protected currentSlide = 0;
  protected maxSlide = 0;

  startX = 0;
  startY = 0;
  isScrolled: boolean | null = null;

  onTouchStart(event: TouchEvent) {
    this.startX = event.changedTouches[0].clientX;
    this.startY = event.changedTouches[0].clientY;
  }

  onTouchMove(event: TouchEvent) {
    if (this.isScrolled === null) {
      const deltaX = Math.abs(event.changedTouches[0].clientX - this.startX);
      const deltaY = Math.abs(event.changedTouches[0].clientY - this.startY);
      this.isScrolled = deltaY >= deltaX / 2;
    }

    if (!this.isScrolled) {
      event.preventDefault();
    }
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.isScrolled) {
      const endX = event.changedTouches[0].clientX;

      if (this.startX < endX && this.currentSlide > 0) {
        this.moveLeft();
      }

      if (this.startX > endX && this.currentSlide < this.maxSlide) {
        this.moveRight();
      }
    }

    this.isScrolled = null;
    this.startX = 0;
    this.startY = 0;
  }

  checkControlVisibility() {
    const cardsRefContainerElement = this.cardsRef.nativeElement.parentNode;
    const cardsRefElement = this.cardsRef.nativeElement;

    const slidesWithoutGap = cardsRefElement.scrollWidth / cardsRefContainerElement.offsetWidth;

    if (slidesWithoutGap > 2) {
      const vw = window.innerWidth / 90;
      const vws = vw * Math.floor(slidesWithoutGap) - 1;

      this.maxSlide = Math.ceil(((cardsRefElement.scrollWidth - vws) / cardsRefContainerElement.offsetWidth)) - 1;
    } else {
      this.maxSlide = Math.ceil(cardsRefElement.scrollWidth / cardsRefContainerElement.offsetWidth) - 1
    }

    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = this.maxSlide;
      this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1vw * ${this.currentSlide}))`;
    }
  }

  ngAfterContentChecked() {
    this.checkControlVisibility();

    if (this.maxSlide <= this.currentSlide) {
      this.controlRight.nativeElement.style.visibility = 'hidden';
    } else {
      this.controlRight.nativeElement.style.visibility = 'visible';
    }

    if (this.currentSlide === 0) {
      this.controlLeft.nativeElement.style.visibility = 'hidden';
    } else {
      this.controlLeft.nativeElement.style.visibility = 'visible';
    }
  }

  moveLeft() {
    this.currentSlide--;
    this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1vw * ${this.currentSlide}))`;
  }

  moveRight() {
    this.currentSlide++;
    this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1vw * ${this.currentSlide}))`;
  }
}

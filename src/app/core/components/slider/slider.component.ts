import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef, HostListener,
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
export class SliderComponent implements AfterContentChecked, AfterContentInit {
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any){
  //   const window = event.target;
  //
  //   console.log("Width: " + window.innerWidth);
  // }

  // @Input() displayedImages: number = 3;

  @ViewChild('controlLeft', { static: true }) controlLeft!: ElementRef;
  @ViewChild('controlRight', { static: true }) controlRight!: ElementRef;
  @ViewChild('cardsRef', { static: true }) cardsRef!: ElementRef;

  // protected cards: HTMLElement[] = [];
  // protected cardsLength?: number;
  protected currentSlide = 0;
  protected maxSlide = 0;
  // protected cardMinWidth = '';

  ngOnInit() {
    // console.log(JSON.stringify(this.cardsRef.nativeElement.children));
    // this.cardMinWidth = `calc((100% - ${(this.displayedImages - 1)}vw) / ${this.displayedImages})`;
  }

  ngAfterContentInit() {
    // const cards = Array.from(this.cardsRef.nativeElement.children);
    // cards.forEach((card) => {
    //   if (window.innerWidth > 500) {
    //     // card.st
    //   } else {}
    //
    // })
  }

  ngAfterContentChecked() {
    console.log('-----start-----');
    const cardsRefContainerElement = this.cardsRef.nativeElement.parentNode;
    const cardsRefElement = this.cardsRef.nativeElement;
    const lastCard = cardsRefElement.children[cardsRefElement.children.length - 1];
    const aa = cardsRefElement.scrollWidth / cardsRefContainerElement.offsetWidth;
    const cardsRefElementGap = getComputedStyle(cardsRefElement).getPropertyValue('row-gap');
    // console.log(aa);
    if (aa > 2) {
      const withoutGap = (cardsRefElement.scrollWidth) / cardsRefContainerElement.offsetWidth;
      const vw = window.innerWidth / 90;
      const vws = vw * Math.floor(aa - 1);
      const withGap = ((cardsRefElement.scrollWidth - vws) / (cardsRefContainerElement.offsetWidth)) - 1;
      const withGapAndCeil = Math.ceil(((cardsRefElement.scrollWidth - vws) / cardsRefContainerElement.offsetWidth)) - 1;

      console.log('cardsRefElementGap: ', cardsRefElementGap);
      console.log('withoutGap: ', withoutGap);
      console.log('vw: ', vw);
      console.log('vws: ', vws);
      console.log('withGap ' + withGap);
      console.log('withGapAndCeil ' + withGapAndCeil);
      // this.maxSlide = Math.ceil(cardsRefElement.scrollWidth / cardsRefContainerElement.offsetWidth) - 1;
      this.maxSlide = withGapAndCeil;
      console.log('if ' + this.maxSlide);
    } else {
      this.maxSlide = Math.ceil(cardsRefElement.scrollWidth / cardsRefContainerElement.offsetWidth) - 1;
      console.log('else ' + this.maxSlide);
    }
    console.log('-----end-----');
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

  moveLeft(event: MouseEvent) {
    this.currentSlide--;
    this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1vw * ${this.currentSlide}))`;
    // this.controlRight.nativeElement.style.visibility = 'visible';
    // if (this.currentSlide === 0) {
    //   (event.currentTarget as HTMLElement).style.visibility = 'hidden'
    // }
  }

  getTranslateX(element: any) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    console.log('translateX: ', matrix.m41);
  }

  moveRight(event: MouseEvent) {
    const cardsLength = this.cardsRef.nativeElement.children.length;
    // let maxSlide = 0;
    // console.log(this.cardsRef.nativeElement.parentNode);
    // const maxSlide = Math.ceil(this.cards.length / this.displayedImages);
    // if (this.currentSlide === maxSlide) {
    //   return;
    // }
    this.currentSlide++;
    this.cardsRef.nativeElement.style.transform = `translateX(calc(-100% * ${this.currentSlide} - 1vw * ${this.currentSlide}))`;
    // this.controlLeft.nativeElement.style.visibility = 'visible';
    //
    // const cardsRefContainerElement = this.cardsRef.nativeElement.parentNode;
    // const cardsRefElement = this.cardsRef.nativeElement;
    // this.maxSlide = Math.floor(cardsRefElement.scrollWidth / cardsRefContainerElement.offsetWidth);
    // console.log(cardsRefElement.scrollWidth)
    // console.log(cardsRefElement.offsetWidth)
    // console.log(this.maxSlide);
    // if (this.currentSlide >= this.maxSlide - 1) {
    //   (event.currentTarget as HTMLElement).style.visibility = 'hidden'
    // }
  }
}

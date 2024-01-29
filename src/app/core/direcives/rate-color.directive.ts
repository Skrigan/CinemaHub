import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRateColor]'
})
export class RateColorDirective implements OnInit {
  @Input() rating!: number | string;

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    const fixedRating = Number((typeof this.rating === 'number' ? this.rating : Number(this.rating)).toFixed(1));
      if (fixedRating >= 8) {
        this.setBackgroundImage('linear-gradient(160deg,#eacc7f 16%,#ad9c72 64%)');
      } else if (fixedRating >= 7) {
        this.setBackgroundColor('#3bb33b');
      } else if (fixedRating >= 6) {
        this.setBackgroundColor('#777')
      } else {
        this.setBackgroundColor('red');
      }
    }

  setBackgroundColor(color: string) {
    this.render.setStyle(this.element.nativeElement, 'background-color', color);
  }

  setBackgroundImage(backgroundImage: string) {
    this.render.setStyle(this.element.nativeElement, 'background-image', backgroundImage);
    this.render.setStyle(this.element.nativeElement, 'color', 'black');
  }
}

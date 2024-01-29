import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRateColor]'
})
export class RateColorDirective implements OnInit {
  @Input() rating!: number;

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    switch (Math.floor(this.rating)) {
      case 0 :
      case 1 :
      case 2 :
      case 3 :
      case 4 :
      case 5 : {
        this.setBackgroundColor('red');
        break
      }
      case 6 : {
        this.setBackgroundColor('#777');
        break
      }
      case 7 : {
        this.setBackgroundColor('#3bb33b');
        break
      }
      case 8 :
      case 9 :
      case 10 : {
        this.setBackgroundImage('linear-gradient(160deg,#eacc7f 16%,#ad9c72 64%)');
        break
      }
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

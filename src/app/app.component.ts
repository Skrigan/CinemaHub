import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('header', {read: ElementRef}) headerRef!: ElementRef;
  // @HostListener('window:wheel', ['$event'])
  // onWheel(event: WheelEvent) {
  //   if (event.deltaY > 0) {
  //     this.headerRef.nativeElement.classList.add('header_hidden');
  //   } else if (event.deltaY < 0) {
  //     this.headerRef.nativeElement.classList.remove('header_hidden');
  //   }
  // }

  cardMinWidth!: string;

  ngOnInit() {
   this.cardMinWidth = `calc((100% - ${(4 - 1)}vw) / 4)`;
  }
}

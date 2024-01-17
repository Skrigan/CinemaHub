import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('header', {read: ElementRef}) headerRef!: ElementRef;
  prevScrollY: number = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //если страница полностью проскроллена или скроллить некуда
    if (document.documentElement.scrollHeight > window.innerHeight) {
      if (this.prevScrollY < window.scrollY) {
        this.headerRef.nativeElement.classList.add('header_hidden');
      } else {
        this.headerRef.nativeElement.classList.remove('header_hidden');
      }
      this.prevScrollY = window.scrollY;
    }
  }

  footerVisibility = true;
  cardMinWidth!: string;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.cardMinWidth = `calc((100% - ${(4 - 1)}vw) / 4)`;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.footerVisibility = !!['main', 'movie', 'person'].find((item) => {
          return url.split('/').includes(item);
        })
        window.scrollTo(0, 0);
        this.headerRef.nativeElement.classList.remove('header_hidden');
      }
    })
  }
}

import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ModalService} from "./core/services/modal.service";
import {SafeResourceUrl} from "@angular/platform-browser";

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

  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('search') search!: ElementRef;

  videoLink: SafeResourceUrl | null = null;
  searchResults: any[] = []

  footerVisibility = true;
  constructor(private route: ActivatedRoute, private router: Router, private modalService: ModalService) {
  }

  removeTrailerOrMovie() {
    this.modalService.removeVideoLink();
  }

  showModal() {
    this.modal.nativeElement.classList.remove('modal_hidden');
    this.backdrop.nativeElement.classList.remove('backdrop_hidden');
    document.body.classList.add('body__backdropped');
  }

  closeModal() {
    this.modal.nativeElement.classList.add('modal_hidden');
    this.backdrop.nativeElement.classList.add('backdrop_hidden');
    document.body.classList.remove('body__backdropped');
  }

  ngOnInit() {
    this.modalService.getVideoLink().subscribe((videoLink) => {
      this.videoLink = videoLink;
      if (videoLink) this.showModal();
      else this.closeModal();
    })

    this.modalService.getSearchResults().subscribe((searchResults: any) => {
      if (searchResults?.searchFilmsCountResult >= 0) {
        this.searchResults = searchResults.films;
        console.log(searchResults.films);
      } else {
        this.searchResults = [];
      }
    })

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.footerVisibility = !!['main', 'movie', 'person'].find((item) => {
          return url.split('/').includes(item);
        })
        window.scrollTo(0, 0);
        this.modalService.removeSearchResults();
        this.headerRef.nativeElement.classList.remove('header_hidden');
      }
    })
  }
}
// Дюна (Dune: Part One, Фильм, США, Фантастика) рейтинг
// Призрак в доспехах (Koukaku Kidoutai, Аниме, Япония, Боевик) рейтинг

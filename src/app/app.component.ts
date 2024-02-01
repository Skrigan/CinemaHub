import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ModalService} from "./core/services/modal.service";
import {SafeResourceUrl} from "@angular/platform-browser";
import {getMovieType} from "./core/utils";
import {ratings} from "./core/data/filters";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('header', {read: ElementRef}) headerRef!: ElementRef;
  prevScrollY: number = 0;
  inputFocused = false;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //если страница полностью проскроллена или скроллить некуда
    if (document.documentElement.scrollHeight > window.innerHeight) {
      if (this.prevScrollY < window.scrollY && !this.inputFocused) {
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
    this.backdrop.nativeElement.style.top = `${window.scrollY}px)`;
    this.backdrop.nativeElement.classList.remove('backdrop_hidden');
  }

  closeModal() {
    this.modal.nativeElement.classList.add('modal_hidden');
    this.backdrop.nativeElement.classList.add('backdrop_hidden');
  }

  getMovie(event: MouseEvent) {
    const target = <Element>event.target;
    const link = target.closest('.movieA');
    if (link) {
      const id = link.getAttribute('data-id');
      this.router.navigate(['/movie', id]);
    }
  }

  ngOnInit() {
    this.modalService.$isFocused.subscribe((focus) => {
      this.inputFocused = focus;
    })

    this.modalService.getVideoLink().subscribe((videoLink) => {
      this.videoLink = videoLink;
      if (videoLink) this.showModal();
      else this.closeModal();
    })

    this.modalService.getSearchResults().subscribe((searchResults: any) => {
      if (searchResults?.searchFilmsCountResult >= 0) {
        this.searchResults = searchResults.films;
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
        this.inputFocused = false;
        this.modalService.removeSearchResults();
        this.headerRef.nativeElement.classList.remove('header_hidden');
      }
    })
  }

  protected readonly getMovieType = getMovieType;
}

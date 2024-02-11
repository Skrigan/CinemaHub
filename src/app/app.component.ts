import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ModalService} from "./core/services/modal.service";
import {SafeResourceUrl} from "@angular/platform-browser";
import {SearchService} from "./core/services/search.service";
import {Movie2} from "./core/interfaces/Movie2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('header', {read: ElementRef}) headerRef!: ElementRef;
  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('search') search!: ElementRef;

  prevScrollY: number = 0;
  inputFocused = false;
  videoLink: SafeResourceUrl | null = null;
  searchResults: Movie2[] = []
  footerVisibility = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (document.documentElement.scrollHeight > window.innerHeight) {
      if (this.prevScrollY < window.scrollY && !this.inputFocused) {
        this.headerRef.nativeElement.classList.add('header_hidden');
      } else {
        this.headerRef.nativeElement.classList.remove('header_hidden');
      }
      this.prevScrollY = window.scrollY;
    }
  }

  constructor(private router: Router,
              private modalService: ModalService,
              private searchService: SearchService
  ) {
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

  removeVideoLink() {
    this.modalService.removeVideoLink();
  }

  getMovie(event: MouseEvent) {
    const target = <Element>event.target;
    const link = target.closest('.search__a');
    if (link) {
      const id = link.getAttribute('data-id')!;
      this.router.navigate(['/movie', id]);
    }
  }

  ngOnInit() {
    this.searchService.$isFocused.subscribe((focus) => {
      this.inputFocused = focus;
    })

    this.modalService.getVideoLink().subscribe((videoLink) => {
      this.videoLink = videoLink;
      if (videoLink) this.showModal();
      else this.closeModal();
    })

    this.searchService.getSearchResults().subscribe((searchResults) => {
      this.searchResults = searchResults !== null ? searchResults : [];
    })

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.footerVisibility = !!['main', 'movie', 'person'].find((item) => {
          return url.split('/').includes(item);
        })
        window.scrollTo(0, 0);
        this.inputFocused = false;
        this.searchService.removeSearchResults();
        this.headerRef.nativeElement.classList.remove('header_hidden');
      }
    })
  }
}

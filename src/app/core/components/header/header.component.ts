import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {debounceTime, filter, fromEvent, map} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";
import {SearchService} from "src/app/core/services/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @ViewChild('logo', { static: true }) logo!: ElementRef;
  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('inputContainer', { static: true }) inputContainer!: ElementRef;
  @ViewChild('inputElement', { static: true }) inputElement!: ElementRef;
  @ViewChild('burger', { static: true }) burger!: ElementRef;

  isSearchFocused = false;
  isMobileSearchOpened = false;

  isBurgerOpened = false;

  constructor(
    private router: Router,
    private searchService: SearchService
  ) {
  }

  toggleBurgerMenu() {
    if (this.isMobileSearchOpened) {
      this.logo.nativeElement.classList.remove('logo_mobile-hidden');
      this.inputContainer.nativeElement.classList.remove('search_mobile-open');
      this.isMobileSearchOpened = false;
    }

    if (this.isBurgerOpened) {
      this.burger.nativeElement.classList.remove('burger_opened')
      this.nav.nativeElement.classList.remove('nav_opened')
    } else {
      this.burger.nativeElement.classList.add('burger_opened');
      this.nav.nativeElement.classList.add('nav_opened');
    }

    this.isBurgerOpened = !this.isBurgerOpened;
  }

  openMobileSearch() {
    if (!this.isMobileSearchOpened) {
      this.logo.nativeElement.classList.add('logo_mobile-hidden');
      this.inputContainer.nativeElement.classList.add('search_mobile-open');
      this.burger.nativeElement.classList.add('burger_opened');
      this.inputElement.nativeElement.focus();

      this.isBurgerOpened = true;
      this.isMobileSearchOpened = true;
    }
  }

  onBlur() {
    this.isSearchFocused = false;
    this.searchService.$isFocused.next(false);
  }

  onFocus() {
    this.isSearchFocused = true;
    setTimeout(() => {
      if (this.isSearchFocused) {
        this.searchService.$isFocused.next(true);
      }
    }, 300);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.isBurgerOpened) {
          this.toggleBurgerMenu();
        }
        this.inputElement.nativeElement.value = '';
      }
    })

    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        map((ev: any) => (ev.target as HTMLInputElement).value),
        filter((str) => str.length >= 3 || str.length === 0),
      )
      .subscribe((str) => {
        if (str.length === 0) {
          this.searchService.removeSearchResults();
        } else {
          this.searchService.setSearchResults(str);
        }
      });
  }
}



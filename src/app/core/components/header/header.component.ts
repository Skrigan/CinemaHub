import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, fromEvent, map, takeWhile} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  @ViewChild('inputElement', { static: true }) inputElement!: ElementRef;
  @ViewChild('logo', { static: true }) logo!: ElementRef;
  @ViewChild('inputContainer', { static: true }) inputContainer!: ElementRef;
  @ViewChild('burger', { static: true }) burger!: ElementRef;
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  isFocused = false;
  isBurgerOpened = false;
  isSearchOpened = false;

  constructor(
    private router: Router,
    private modalService: ModalService
  ) {
  }

  toggleBurgerMenu() {
    if (this.isSearchOpened) {
      this.inputContainer.nativeElement.classList.remove('search_mobile-open');
      this.logo.nativeElement.classList.remove('logo_mobile-hidden');
      this.isSearchOpened = false;
    }

    if (!this.isBurgerOpened) {
      this.burger.nativeElement.classList.add('burger_opened');
      this.nav.nativeElement.classList.add('nav_opened');
      this.modalService.$isFocused.next(true);
    } else {
      this.burger.nativeElement.classList.remove('burger_opened')
      this.nav.nativeElement.classList.remove('nav_opened')
      this.modalService.$isFocused.next(false);
    }

    this.isBurgerOpened = !this.isBurgerOpened;
  }

  openMobileSearch() {
    if (!this.isSearchOpened) {
      this.inputContainer.nativeElement.classList.add('search_mobile-open');
      this.inputElement.nativeElement.focus();
      this.logo.nativeElement.classList.add('logo_mobile-hidden');
      this.burger.nativeElement.classList.add('burger_opened');
      this.isBurgerOpened = true;
      this.isSearchOpened = true;
    }
  }

  onBlur() {
    this.isFocused = false;
    this.modalService.$isFocused.next(false);
  }

  onFocus() {
    this.isFocused = true;
    setTimeout(() => {
      if (this.isFocused) {
        this.modalService.$isFocused.next(true);
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
        map((e: any) => (e.target as HTMLInputElement).value),
        filter((str) => str.length > 2),
      )
      .subscribe((value) => {
        this.modalService.setSearchResults(value);
      });
  }
}



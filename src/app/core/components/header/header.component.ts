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
  isFocused = false;

  constructor(
    private router: Router,
    private modalService: ModalService
  ) {
  }

  onBlur() {
    this.isFocused = false;
    //ааааа
    // setTimeout(() => {
    this.modalService.$isFocused.next(false);
    // }, 100);
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



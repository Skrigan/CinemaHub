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

  constructor(
    private router: Router,
    private modalService: ModalService
  ) {
  }



  onBlur() {
    console.log('blur');
    this.modalService.removeSearchResults();
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
        // distinctUntilChanged(),
      )
      .subscribe((value) => {
        console.log('keyup: ', value);
        this.modalService.setSearchResults(value);
      });

    fromEvent(this.inputElement.nativeElement, 'focus')
      .pipe(
        debounceTime(200),
        map((e: any) => (e.target as HTMLInputElement).value),
        filter((str) => str.length > 2),
        // distinctUntilChanged(),
      )
      .subscribe((value) => {
        console.log("focus: ", value);
        this.modalService.setSearchResults(value);
      });

    // fromEvent(this.inputElement.nativeElement, 'blur')
    //   .pipe(
    //     debounceTime(200),
    //     map((e: any) => (e.target as HTMLInputElement).value),
    //     filter((str) => str.length > 2),
    //     // distinctUntilChanged(),
    //   )
    //   .subscribe(() => {
    //     console.log('blur');
    //     this.modalService.removeSearchResults();
    //   });
  }
}



import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnChanges {
  @Input({required: true}) page!: number;
  @Input({required: true}) lastPage!: number;

  @Output() onChangePage = new EventEmitter<number>();

  @ViewChild('pages', {static: true}) pages!: ElementRef;
  @ViewChild('controlLeft', {static: true}) controlLeft!: ElementRef;
  @ViewChild('controlRight', {static: true}) controlRight!: ElementRef;

  visiblePages: number[] = [];

  ngOnChanges() {
    this.getPages();
  }

  getPages() {
    this.visiblePages.length = 0;

    if (this.page === 1) {
      this.controlLeft.nativeElement.classList.add('control_disabled');
    } else {
      this.controlLeft.nativeElement.classList.remove('control_disabled');
    }

    if (this.page === this.lastPage) {
      this.controlRight.nativeElement.classList.add('control_disabled');
    } else {
      this.controlRight.nativeElement.classList.remove('control_disabled');
    }

    if (this.lastPage <= 11) {

      this.pages.nativeElement.classList.remove('pages_before');
      this.pages.nativeElement.classList.remove('pages_after');

      for (let i = 1; i <= this.lastPage; i++) {
        this.visiblePages.push(i);
      }

    } else {

      let start = this.page - 5 > 0 ? this.page - 5 : 1;
      let end = start + 11 > this.lastPage ? this.lastPage + 1 : start + 11;
      start = end - 11;

      for (let i = start; i < end; i++) {
        this.visiblePages.push(i);
      }

      if (this.page - 1 > 5) {
        this.pages.nativeElement.classList.add('pages_before');
        this.visiblePages[0] = 1;
      } else {
        this.pages.nativeElement.classList.remove('pages_before');
      }

      if (this.lastPage - this.page > 5) {
        this.pages.nativeElement.classList.add('pages_after');
        this.visiblePages[this.visiblePages.length - 1] = this.lastPage;
      } else {
        this.pages.nativeElement.classList.remove('pages_after');
      }
    }
  }

  onPageClick(event: MouseEvent) {
    const target = <HTMLElement>event.target;

    if (target.classList.contains('page') && !target.classList.contains('page_current')) {

      this.page = parseInt(target.textContent!);
      this.getPages();
      this.onChangePage.emit(this.page);
    }
  }

  moveLeft() {
    if (this.page > 1) {
      this.page--;
      this.getPages();
      this.onChangePage.emit(this.page);
    }
  }

  moveRight() {
    if (this.page < this.lastPage) {
      this.page++;
      this.getPages();
      this.onChangePage.emit(this.page);
    }
  }
}

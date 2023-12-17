import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent implements OnInit, AfterContentInit {
  @Input({required: true}) title!: string;
  @Input({required: true}) options!: string[];
  @Input() anyOption = true;

  @Output() onSelect = new EventEmitter<string | null>();

  isOpened = false;
  selected!: Element;

  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('placeholder') placeholder!: ElementRef;
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('option') option!: ElementRef;
  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const clickedElements = event.composedPath();
    if (
      this.isOpened
      && !clickedElements.includes(this.dropdown.nativeElement)
      && !clickedElements.includes(this.placeholder.nativeElement)
    )
    {
      this.toggleDropdown();
    }
  }

  ngOnInit() {
  //   // this.selected = document.querySelector('.options__value_selected')!;
  //   this.selected = this.dropdown.nativeElement.children[0];
  //   this.selected.classList.add('options__value_selected');
  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    console.log(this.dropdown)
    this.selected = this.dropdown.nativeElement.firstElementChild;
    this.selected.classList.add('options__value_selected');
    if (!this.anyOption) this.option.nativeElement.textContent = this.selected.textContent;
  }

  getOption(event: MouseEvent) {
    const target = <HTMLElement>event.target;
    if (target.textContent === 'любой') {
      this.option.nativeElement.textContent = '';
      this.selected.classList.remove('options__value_selected');
      target.classList.add('options__value_selected');
      this.selected = target;
      this.onSelect.emit(null);
      this.toggleDropdown();
      return
    }
    this.options.forEach((option) => {
      if (option === target.textContent) {
        this.option.nativeElement.textContent = option;
        this.selected.classList.remove('options__value_selected');
        target.classList.add('options__value_selected');
        this.selected = target;
        this.onSelect.emit(option);
        this.toggleDropdown();
      }
    })
  }

  toggleDropdown() {
    this.dropdown.nativeElement.classList.toggle('options__hidden');
    this.icon.nativeElement.classList.toggle('placeholder__icon_rotated');
    this.isOpened = !this.isOpened;
  }
}

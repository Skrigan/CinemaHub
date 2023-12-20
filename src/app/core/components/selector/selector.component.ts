import {
  AfterContentInit, AfterViewInit,
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
export class SelectorComponent implements AfterViewInit {
  @Input({required: true}) label!: string;
  @Input({required: true}) options!: { label: string, value: any }[];
  @Input() anyOption?: { label: string, value: any };
  @Input() presetValue?: number;
  @Output() onSelect = new EventEmitter<any>();

  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('placeholder') placeholder!: ElementRef;
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('option') option!: ElementRef;

  isOpened = false;
  selected!: Element;

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

  ngAfterViewInit() {
    const dropdownElement = this.dropdown.nativeElement;
    if (this.presetValue === undefined) {
      this.selected = dropdownElement.firstElementChild;
      if (this.anyOption === undefined) {
        this.option.nativeElement.textContent = this.selected.textContent;
      }
    } else {
      const index = this.anyOption ? this.presetValue + 1 : this.presetValue;
      this.selected = dropdownElement.children[index];
      this.option.nativeElement.textContent = this.selected.textContent;
    }
    this.selected.classList.add('options__value_selected');
  }

  getOption(event: MouseEvent) {
    const target = <HTMLElement>event.target;

    if (target.classList.contains('options__value') && target !== this.selected) {

      this.selected.classList.remove('options__value_selected');
      target.classList.add('options__value_selected');
      this.selected = target;
      const index = target.getAttribute('data-index');

      if (index === null) {
        this.option.nativeElement.textContent = '';
        this.onSelect.emit(this.anyOption!.value);
      } else {
        const option = this.options[parseInt(index)];
        this.option.nativeElement.textContent = option.label
        this.onSelect.emit(option.value);
      }
    }

    this.toggleDropdown();
  }

  toggleDropdown() {
    this.dropdown.nativeElement.classList.toggle('options__hidden');
    this.icon.nativeElement.classList.toggle('placeholder__icon_opened');
    this.isOpened = !this.isOpened;
  }
}

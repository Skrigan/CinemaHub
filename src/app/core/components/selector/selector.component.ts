import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent {
  @Input({required: true}) label!: string;
  @Input({required: true}) options!: { label: string, value: any }[];
  @Input() anyOption?: { label: string, value: any };
  @Input() presetValue?: any;

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnChanges() {
    if (this.dropdown && this.placeholder && this.option && this.icon) {
      this.updateView();
    }
  }

  ngAfterViewInit() {
    this.updateView();
  }

  updateView() {
    const dropdownElement: Element = this.dropdown.nativeElement;
    this.selected?.classList.remove('options__value_selected');

    if (this.presetValue === undefined) {

      this.selected = dropdownElement.firstElementChild!;
      if (this.anyOption === undefined) {
        this.option.nativeElement.textContent = this.selected.textContent;
      }

    } else {

      let isFounded = false;
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].value === this.presetValue) {
          const index = this.anyOption ? i + 1 : i;
          this.selected = dropdownElement.children[index];
          this.option.nativeElement.textContent = this.selected.textContent;
          isFounded = true;
        }
      }

      if (!isFounded) {
        this.selected = dropdownElement.firstElementChild!;
        if (this.anyOption === undefined) {
          this.option.nativeElement.textContent = this.selected.textContent;
        } else {
          this.option.nativeElement.textContent = '';
        }
      }

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

import {
  Component,
  OnInit,
  HostListener,
  ContentChild,
  ElementRef,
  AfterContentInit,
  HostBinding,
} from '@angular/core'

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.less'],
})
export class InputLabelComponent implements OnInit, AfterContentInit {
  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    this.text = this.input.nativeElement.getAttribute('placeholder')
    this.input.nativeElement.addEventListener('focus', _ => this.onInputFocus())
    this.input.nativeElement.addEventListener('blur', _ => this.onInputBlur())
    this.input.nativeElement.addEventListener('keyup', _ => this.onInputKeyup())
    // console.log(this.input.nativeElement)
  }

  @ContentChild('input', { static: true }) input: ElementRef<HTMLInputElement>

  text = ''

  @HostBinding('class.focus')
  focus = false

  @HostBinding('class.empty')
  empty = true

  onInputFocus() {
    // console.log('focus')
    this.focus = true
  }
  onInputBlur() {
    // console.log('blur')
    this.focus = false
  }
  onInputKeyup() {
    this.empty = !this.input.nativeElement.value
    // console.log('keyup', this.empty)
  }
}

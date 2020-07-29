import {
  Component,
  OnInit,
  ContentChild,
  ElementRef,
  AfterContentInit,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "app-input-label",
  templateUrl: "./input-label.component.html",
  styleUrls: ["./input-label.component.less"]
})
export class InputLabelComponent implements OnInit, AfterContentInit {
  constructor() {}

  ngOnInit() {
    console.log("error", this.hasError, this.error);
  }
  ngAfterContentInit() {
    this.text = this.input.nativeElement.getAttribute("placeholder");
    this.input.nativeElement.addEventListener("focus", _ =>
      this.onInputFocus()
    );
    this.input.nativeElement.addEventListener("blur", _ => this.onInputBlur());
    this.input.nativeElement.addEventListener("keyup", _ =>
      this.onInputKeyup()
    );
    // console.log(this.input.nativeElement)
  }

  @ContentChild("input", {static: true}) input: ElementRef<HTMLInputElement>;

  @Input() error = "";

  @HostBinding("class.error")
  get hasError() {
    return this.error !== "" && this.error !== null;
  }

  text = "";

  get errorText() {
    /* return this.error === "required" */
    /*   ? "This field is required!" */
    /*   : "Please enter a valid email address!"; */
    return this.error === 'required'
      ? 'Dieses Feld ist erforderlich!'
      : 'Bitte geben Sie eine gültige E-mail Addresse an!'
  }

  @HostBinding("class.focus")
  focus = false;

  @HostBinding("class.empty")
  empty = true;

  onInputFocus() {
    // console.log('focus')
    this.focus = true;
  }
  onInputBlur() {
    // console.log('blur')
    this.focus = false;
  }
  onInputKeyup() {
    this.empty = !this.input.nativeElement.value;
    // console.log('keyup', this.empty)
  }
}

import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChild,
  ElementRef,
  HostBinding
} from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.less"]
})
export class CheckboxComponent implements OnInit, AfterContentInit {
  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(this.input.nativeElement);
  }

  @ContentChild("input", { static: true }) input: ElementRef<HTMLInputElement>;

  @HostBinding("class.checked")
  checked = false;

  toggle() {
    this.checked = !this.checked;
    this.input.nativeElement.checked = this.checked;
  }
}

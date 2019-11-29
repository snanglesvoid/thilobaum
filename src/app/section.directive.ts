import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  HostListener
} from "@angular/core";
import { SectionsService } from "./sections.service";

@Directive({
  selector: "[section]"
})
export class SectionDirective implements OnInit {
  constructor(
    public el: ElementRef<HTMLDivElement>,
    private sections: SectionsService
  ) {}

  @Input("section") name: string;

  ngOnInit() {
    console.log(this.name, "init");
    if ((window as any).sections == undefined) {
      (window as any).sections = {};
    }
    (window as any).sections[this.name] = this;

    this.onScroll();
  }

  inView: boolean = false;
  get active() {
    return this.inView;
  }

  @HostListener("window:scroll")
  onScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    const height = this.el.nativeElement.getBoundingClientRect().height;

    this.inView =
      scrollPosition + 80 >= componentPosition &&
      scrollPosition + 80 <= componentPosition + height;

    if (this.inView) {
      this.sections.activeSection = this.name;
    }
  }
}

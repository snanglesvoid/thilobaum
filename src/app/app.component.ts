import {
  Component,
  HostListener,
  OnInit,
  HostBinding,
  ViewChildren,
  QueryList
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { SectionDirective } from "./section.directive";

const size_md = 920;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  title = "thilobaum";

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.windowResized();
  }

  imagesLoadProgress(event) {
    this.loadingProgress = event;
  }
  imagesLoadComplete(event) {
    this.imagesLoaded = true;
  }

  loadingProgress = 0;
  imagesLoaded = false;

  datasheetVisible = false;
  toggleDatasheet() {
    this.datasheetVisible = !this.datasheetVisible;
  }

  tailorTextVR = 0;
  tailorTextVRChange(event) {
    this.tailorTextVR = event;
  }
  get tailorImageFilter() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `grayscale(${this.tailorTextVR}) ` +
        `brightness(${1 - this.tailorTextVR * 0.5})`
    );
  }

  acousticsTextVR = 0;
  acousticsTextVRChange(event) {
    this.acousticsTextVR = event;
  }
  get acousticsImageTransform() {
    // scale(2) translateX(25%);
    return this.sanitizer.bypassSecurityTrustStyle(
      `scale(${1 - this.acousticsTextVR * 0.2})` +
        `translateX(${-this.acousticsTextVR * 30}%)`
    );
  }

  acoustics1TextVR = 0;
  acoustics1TextVRChange(event) {
    this.acoustics1TextVR = event;
  }
  get acoustics1ImageFilter() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `grayscale(${this.acoustics1TextVR}) ` +
        `brightness(${1 - this.acoustics1TextVR * 0.75})`
    );
  }

  @HostListener("window:resize")
  windowResized() {
    let w = window.innerWidth;
    if (w <= size_md) {
      this.windowSize = "md";
    } else {
      this.windowSize = "lg";
    }
  }
  windowSize = "lg";

  @HostBinding("class.md")
  get isMd() {
    return this.windowSize == "md";
  }
  @HostBinding("class.lg")
  get isLg() {
    return this.windowSize == "lg";
  }

  @ViewChildren(SectionDirective) sections: QueryList<SectionDirective>;

  hideFoot = false;
  showImprint: boolean = false;

  toggleImprint() {
    this.showImprint = !this.showImprint;
    if (this.showImprint) {
      setTimeout(() => {
        document.getElementById("imprint").scrollIntoView();
      }, 200);
    }
  }

  arrowClicked() {
    let div = document.getElementById("aetitle");
    window.location.hash = "aesthetics-1";
  }
}

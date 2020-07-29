import {
  Component,
  HostListener,
  OnInit,
  HostBinding,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser"
import {SectionDirective} from "./section.directive"
import {NavComponent} from "./nav/nav.component"

const size_md = 920

@Component({
  selector: "app-root",
  templateUrl: "./app.component.de.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  get tailorImageFilter() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `grayscale(${this.tailorTextVR}) ` +
      `brightness(${1 - this.tailorTextVR * 0.5})`
    )
  }
  get acousticsImageTransform() {
    // scale(2) translateX(25%)
    return this.sanitizer.bypassSecurityTrustStyle(
      `scale(${1 - this.acousticsTextVR * 0.2})` +
      `translateX(${-this.acousticsTextVR * 30}%)`
    )
  }
  get acoustics1ImageFilter() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `grayscale(${this.acoustics1TextVR * 0.75}) ` +
      `brightness(${1 - this.acoustics1TextVR * 0.4})`
    )
  }

  @HostBinding("class.md")
  get isMd() {
    return this.windowSize == "md"
  }
  @HostBinding("class.lg")
  get isLg() {
    return this.windowSize == "lg"
  }
  title = "thilobaum"
  shouldgoout = false

  loadingProgress = 0
  imagesLoaded = false

  datasheetVisible = false

  tailorTextVR = 0

  acousticsTextVR = 0

  acoustics1TextVR = 0
  windowSize = "lg"

  @ViewChildren(SectionDirective) sections: QueryList<SectionDirective>

  hideFoot = false
  showImprint: boolean = false

  @ViewChild(NavComponent, {static: true}) nav: NavComponent

  ngOnInit() {
    this.windowResized()
    setTimeout(() => {
      this.shouldgoout = true
    }, 5600)
  }

  imagesLoadProgress(event: any) {
    this.loadingProgress = event
  }
  imagesLoadComplete() {
    console.log("app.component::imagesLoaded")
    let f = () => {
      console.log("f, timeout", this.shouldgoout)
      if (this.shouldgoout) {
        this.imagesLoaded = true
      } else {
        setTimeout(f, 100)
      }
    }
    setTimeout(f, 100)
  }
  toggleDatasheet() {
    this.datasheetVisible = !this.datasheetVisible
  }
  tailorTextVRChange(event: any) {
    this.tailorTextVR = event
  }
  acousticsTextVRChange(event: any) {
    this.acousticsTextVR = event
  }
  acoustics1TextVRChange(event: any) {
    this.acoustics1TextVR = event
  }

  @HostListener("window:resize")
  windowResized() {
    let w = window.innerWidth
    if (w <= size_md) {
      this.windowSize = "md"
    } else {
      this.windowSize = "lg"
    }
  }

  toggleImprint() {
    this.showImprint = !this.showImprint
    if (this.showImprint) {
      setTimeout(() => {
        document.getElementById("imprint").scrollIntoView()
      }, 200)
    }
  }

  arrowClicked() {
    this.nav.goToSection("aesthetics")
  }
}

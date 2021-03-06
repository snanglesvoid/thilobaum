import {
  Component,
  HostListener,
  OnInit,
  HostBinding,
  ViewChildren,
  QueryList,
  ViewChild,
  ElementRef,
  AfterContentInit,
} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser"
import {SectionDirective} from "./section.directive"
import {NavComponent} from "./nav/nav.component"

const size_md = 920

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit, AfterContentInit {
  constructor(private sanitizer: DomSanitizer, private el: ElementRef<HTMLDivElement>) {}
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
  public aestheticsScrollAnchorBottom = '0px';
  calcAeatheticsScrollAnchorBottom() {
    let el = this.el.nativeElement
    let aes = el.querySelector('#aesthetics-1')
    let container = aes.querySelector('.text-container')
    let text = aes.querySelector('.left')
    let containerHeight = container.getBoundingClientRect().height
    let textHeight = text.getBoundingClientRect().height
    let winHeight = window.innerHeight
    this.aestheticsScrollAnchorBottom =
      `${containerHeight * 0.08 + textHeight + winHeight * 0.5}px`
  }
  public acousticsScrollAnchorBottom = '0px'
  calcAcousticsScrollAnchorBottom() {
    let el = this.el.nativeElement
    let acu = el.querySelector('#acoustics-1')
    let text = acu.querySelector('.left')
    let textHeight = text.getBoundingClientRect().height
    let winHeight = window.innerHeight
    this.acousticsScrollAnchorBottom =
      `${textHeight + winHeight * 0.40}px`
  }
  public introMarginLeft = '50%'
  calcIntroMarginLeft() {
    let ratio = window.innerWidth / window.innerHeight
    if (this.isLg) {
      this.introMarginLeft = '0'
    }
    else if (ratio < 1.0) {
      let x = .5 + (1 - ratio) * 0.5
      this.introMarginLeft = `${100 * x}%`

    } else {
      this.introMarginLeft = '50%'
    }
  }
  public contactTransform = 'scale(1)';
  calcContactTransform() {
    let w = window.innerWidth
    let scale: number
    if (w >= 1200) {
      scale = 1200.0 / w;
    }
    else {
      scale = 1;
    }
    this.contactTransform = `scale(${scale})`
    console.log(w, this.contactTransform)
  }
  public aesthetics1MarginLeft = '-10%'
  calcAesthetics1MarginLeft() {
    let ratio = window.innerWidth / window.innerHeight
    if (!this.isLg) {
      this.aesthetics1MarginLeft = '-10%'
    } else if (ratio < 1) {
      let x = -.1 - (1 - ratio) * 1.8
      this.aesthetics1MarginLeft = `${x * 100}%`
    } else {
      this.aesthetics1MarginLeft = '-10%'
    }
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
    ; (window as any).app = this;
    this.windowResized()
    setTimeout(() => {
      this.shouldgoout = true
    }, 5600)
  }

  ngAfterContentInit() {
    this.calcAeatheticsScrollAnchorBottom()
    this.calcContactTransform()
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
    console.log('window resized')
    let w = window.innerWidth
    if (w <= size_md) {
      this.windowSize = "md"
    } else {
      this.windowSize = "lg"
    }
    this.calcAeatheticsScrollAnchorBottom()
    this.calcAcousticsScrollAnchorBottom()
    this.calcContactTransform()
    this.calcIntroMarginLeft()
    this.calcAesthetics1MarginLeft()
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

import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'thilobaum'

  constructor(private sanitizer: DomSanitizer) {}

  imagesLoadProgress(event) {
    this.loadingProgress = event
  }
  imagesLoadComplete(event) {
    this.imagesLoaded = true
  }

  loadingProgress = 0
  imagesLoaded = false

  datasheetVisible = false
  toggleDatasheet() {
    this.datasheetVisible = !this.datasheetVisible
  }

  tailorTextVR = 0
  tailorTextVRChange(event) {
    this.tailorTextVR = event
  }
  get tailorImageFilter() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `grayscale(${this.tailorTextVR}) ` +
        `brightness(${1 - this.tailorTextVR * 0.5})`
    )
  }
}

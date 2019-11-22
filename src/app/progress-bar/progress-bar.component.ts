import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core'

import { TweenMax } from 'gsap'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less'],
})
export class ProgressBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    ;(window as any).pb = this
  }

  @Input('progress')
  public get progress() {
    return this._progress
  }
  public set progress(value: number) {
    console.log('set progress', value)
    TweenMax.to(this, 0.5, {
      _progress: value,
      onUpdate: _ => {
        this.progressBar.nativeElement.style.width = this.width
      },
    })
  }
  _progress: number = 0
  get width() {
    return (this.progress * 100).toString() + '%'
  }

  @ViewChild('bar', { static: true }) progressBar: ElementRef<HTMLDivElement>
}

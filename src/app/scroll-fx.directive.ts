import {
  Directive,
  HostListener,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core'

function cumulativeOffset(element: HTMLElement) {
  let top = 0
  do {
    top += element.offsetTop || 0
    element = element.offsetParent as HTMLElement
  } while (element)
  return top
}

@Directive({
  selector: '[scrollFx]',
})
export class ScrollFxDirective {
  constructor(private el: ElementRef<HTMLDivElement>) {}

  @HostListener('window:scroll')
  documentScrolled() {
    let docViewTop = window.scrollY
    let docViewBottom = docViewTop + window.innerHeight
    let el = this.el.nativeElement
    let elemTop = cumulativeOffset(el) + this.offset
    let elemHeight = el.offsetHeight
    let elemBottom = elemTop + elemHeight
    let isStart = Math.max(docViewTop, elemTop)
    let isEnd = Math.min(docViewBottom, elemBottom)
    let viewportRatio = (isEnd - isStart) / elemHeight
    if (viewportRatio < 0) viewportRatio = 0
    let state: 0 | -1 | 1 =
      isEnd - isStart > elemHeight * this.ratio
        ? 0
        : elemTop > docViewTop
        ? -1
        : 1
    // console.log(
    //   'viewport:',
    //   docViewTop.toFixed(0),
    //   docViewBottom.toFixed(0),
    //   'element:',
    //   elemTop,
    //   elemBottom,
    //   'intersection:',
    //   isStart,
    //   isEnd,
    //   'state:',
    //   state
    // )
    let prevState = this.viewportState
    if (prevState !== state) {
      this.scrollFx.emit(state)
    }
    this.viewportRatio.emit(viewportRatio)
    this.viewportState = state
  }

  @Input() offset: number = 0
  @Input() ratio: number = 0.5
  @Output() scrollFx = new EventEmitter<number>()
  @Output() viewportRatio = new EventEmitter<number>()

  viewportState: 0 | -1 | 1 = 1

  @HostBinding('class.over')
  get over() {
    return this.viewportState == -1
  }
  @HostBinding('class.in')
  get in() {
    return this.viewportState == 0
  }
  @HostBinding('class.under')
  get under() {
    return this.viewportState == 1
  }
}

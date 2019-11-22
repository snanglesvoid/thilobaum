import {
  Directive,
  ContentChildren,
  ElementRef,
  AfterContentInit,
  QueryList,
  Output,
  EventEmitter,
} from '@angular/core'

@Directive({
  selector: '[imagesLoaded]',
})
export class ImagesLoadedDirective implements AfterContentInit {
  constructor() {}

  ngAfterContentInit() {
    let images = this.images.toArray().map(x => x.nativeElement)
    let count = images.length
    let loaded = 0
    images.forEach(img => {
      img.addEventListener('load', event => {
        loaded++
        this.progress.emit(loaded / count)
        if (loaded >= count) {
          this.complete.emit('imagesLoaded')
        }
      })
    })
  }

  @ContentChildren('image') images: QueryList<ElementRef<HTMLImageElement>>

  @Output('progress') progress = new EventEmitter<any>()
  @Output('complete') complete = new EventEmitter<any>()
  @Output('fail') fail = new EventEmitter<any>()
}

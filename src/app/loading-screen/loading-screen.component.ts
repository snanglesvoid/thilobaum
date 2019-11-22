import { Component, OnInit, Input, HostBinding } from '@angular/core'

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.less'],
})
export class LoadingScreenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input('progress') progress: number = 0

  @HostBinding('class.complete')
  @Input('complete')
  complete: boolean = false
}

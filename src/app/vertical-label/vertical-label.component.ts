import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-vertical-label',
  templateUrl: './vertical-label.component.html',
  styleUrls: ['./vertical-label.component.less'],
})
export class VerticalLabelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input('label') label: string = ''
}

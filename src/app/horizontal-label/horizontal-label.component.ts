import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-horizontal-label',
  templateUrl: './horizontal-label.component.html',
  styleUrls: ['./horizontal-label.component.less'],
})
export class HorizontalLabelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input('label') label: string = ''
}

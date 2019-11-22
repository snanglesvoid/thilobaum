import { Component, OnInit, Input, HostBinding } from '@angular/core'

@Component({
  selector: 'app-data-sheet',
  templateUrl: './data-sheet.component.html',
  styleUrls: ['./data-sheet.component.less'],
})
export class DataSheetComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @HostBinding('class.visible')
  @Input()
  visible: boolean = false
}

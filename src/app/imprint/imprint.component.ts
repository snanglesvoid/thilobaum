import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.less']
})
export class ImprintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @HostBinding('class.visible')
  @Input() visible: boolean = false;


}

import { Component, OnInit, HostListener, HostBinding } from "@angular/core";
import { SectionsService } from "../sections.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.less"]
})
export class NavComponent implements OnInit {
  constructor(public sections: SectionsService) {}

  ngOnInit() {}

  @HostListener("window:scroll")
  documentScrolled() {
    if (window.scrollY > this.scrollY && window.scrollY > 100) {
      this.down = true;
    } else {
      this.down = false;
    }
    this.scrollY = window.scrollY;
  }

  private scrollY = 0;

  @HostBinding("class.down")
  down: boolean = false;

  @HostBinding("class.open")
  open: boolean = false;

  toggleNav() {
    this.open = !this.open;
  }
}

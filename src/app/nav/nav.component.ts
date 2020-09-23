import {Component, OnInit, HostListener, HostBinding} from "@angular/core";
import {SectionsService} from "../sections.service";

const EasingFunctions = {
  // no easing, no acceleration
  linear: function (t: number) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function (t: number) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function (t: number) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function (t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function (t: number) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function (t: number) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function (t: number) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function (t: number) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function (t: number) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function (t: number) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function (t: number) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function (t: number) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function (t: number) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.de.html",
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

  goToSection(sectionId: string) {
    let begin = window.scrollY;
    let section = document.getElementById(sectionId);
    let anchor: HTMLDivElement = section.querySelector(".scroll-anchor");
    // console.log("scroll to section ", sectionId);
    let scrollTarget = section.offsetTop;
    let deltaY = Math.abs(scrollTarget - begin);
    let h = document.querySelector("body").getBoundingClientRect().height;
    const scrollTime = 1000 + 4000 * (deltaY / h);
    console.log(deltaY, h, scrollTime);
    if (anchor) {
      scrollTarget += anchor.offsetTop;
    }

    // console.log(section, this.data.scrollY, scrollTarget);

    let t0 = new Date().getTime();
    let t: number;
    let update = () => {
      t = new Date().getTime();
      if (t - t0 >= scrollTime) {
        window.scrollTo(0, scrollTarget);
      } else {
        let delta = (t - t0) / scrollTime;
        delta = EasingFunctions.easeInOutQuad(delta);
        let y = begin + delta * (scrollTarget - begin);
        window.scrollTo(0, y);
        window.requestAnimationFrame(update);
      }
    };
    window.requestAnimationFrame(update);
  }

  data = {
    scrollY: 0
  };
}

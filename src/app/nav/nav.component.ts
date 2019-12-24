import { Component, OnInit, HostListener, HostBinding } from "@angular/core";
import { SectionsService } from "../sections.service";

const EasingFunctions = {
  // no easing, no acceleration
  linear: function(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

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

  goToSection(sectionId) {
    let begin = window.scrollY;
    let section = document.getElementById(sectionId);
    let anchor: HTMLDivElement = section.querySelector(".scroll-anchor");
    let scrollTarget = section.offsetTop;
    if (anchor) {
      scrollTarget += anchor.offsetTop;
    }

    console.log(section, this.data.scrollY, scrollTarget);

    let t0 = new Date().getTime();
    let t;
    let update = () => {
      t = new Date().getTime();
      if (t - t0 < 1500) {
        window.scrollTo(0, scrollTarget);
      } else {
        let delta = (t - t0) / 1500;
        delta = EasingFunctions.easeInOutCubic(delta);
        let y = begin + delta * (scrollTarget - begin);
        window.scrollTo(0, y);
        window.requestAnimationFrame(update);
      }
    };
    window.requestAnimationFrame(update);
  }

  data: {
    scrollY: number;
  } = {
    scrollY: 0
  };
}

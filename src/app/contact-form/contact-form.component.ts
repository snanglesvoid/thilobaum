import {
  Component,
  OnInit,
  HostListener,
  ViewChildren,
  QueryList,
  AfterViewInit
} from "@angular/core";

import { HttpClient } from "@angular/common/http";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.less"]
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.idSuffix = "_" + +new Date();
  }

  ngAfterViewInit() {
    this.inputs.changes.subscribe(_ => {
      this.inputs.forEach(input => {
        let placeholder = input.getAttribute("placeholder");
        let top = input.offsetTop;
        let left = input.offsetLeft;
      });
    });
  }

  @HostListener("window:resize")
  documentResized() {}

  submit(event) {
    event.preventDefault();
    console.log(event);
    if (!this.data.agree) return;
    this.http.post("http://localhost:3000/", {
      data: this.data
    });
  }

  @ViewChildren("input") inputs: QueryList<HTMLInputElement>;

  idSuffix;

  data = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    agree: false
  };
}

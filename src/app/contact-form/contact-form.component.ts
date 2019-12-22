import {
  Component,
  OnInit,
  HostListener,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ElementRef
} from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

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
        let placeholder = input.nativeElement.getAttribute("placeholder");
        let top = input.nativeElement.offsetTop;
        let left = input.nativeElement.offsetLeft;
      });
    });
  }

  @HostListener("window:resize")
  documentResized() {}

  submit(event) {
    event.preventDefault();
    this.inputs.map(x => x.nativeElement).forEach(x => console.log(x.name));
    this.data.agree = this.inputs
      .map(x => x.nativeElement)
      .find(x => x.name == "data-agree").checked;
    console.log(this.data);
    if (!this.data.agree) return;
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    this.http
      .post(
        "http://localhost:3000",
        {
          data: this.data
        },
        { headers: headers }
      )
      .subscribe(
        response => console.log("success", response),
        error => console.error(error)
      );
  }

  @ViewChildren("input") inputs: QueryList<ElementRef<HTMLInputElement>>;

  idSuffix;

  data = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    agree: false
  };
}

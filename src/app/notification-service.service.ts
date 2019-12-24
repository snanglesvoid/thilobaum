import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NotificationServiceService {
  constructor() {
    (window as any).notify = this;
  }
  open(success, title, message) {
    this.isOpen = true;
    this.isSuccess = success;
    this.title = title;
    this.message = message;
  }
  clear() {
    this.title = "";
    this.message = "";
    this.isSuccess = false;
    this.isOpen = false;
  }
  title = "";
  message = "";
  isSuccess = false;
  isOpen = false;
}

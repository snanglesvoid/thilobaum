import { Component, OnInit, HostBinding } from "@angular/core";
import { NotificationServiceService } from "../notification-service.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.less"]
})
export class NotificationsComponent implements OnInit {
  constructor(private notificationService: NotificationServiceService) {}

  ngOnInit() {}

  @HostBinding("class.open")
  get open() {
    return this.notificationService.isOpen;
  }

  get success() {
    return this.notificationService.isSuccess;
  }
  get title() {
    return this.notificationService.title;
  }
  get message() {
    return this.notificationService.message;
  }

  close() {
    this.notificationService.clear();
  }
}

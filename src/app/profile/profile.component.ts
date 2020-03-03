import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService, Profile } from "./../api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent {
  profiles: Observable<Profile[]> = this.api.getProfile(10);

  constructor(private api: ApiService) {}

  trackByFn(index: number): number {
    return index;
  }
}

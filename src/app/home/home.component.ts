import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  data: Observable<string> = this.api.getHello();

  constructor(private api: ApiService) {}
}

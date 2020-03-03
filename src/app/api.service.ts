import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private readonly hello: string = "Hello word!";

  constructor(private http: HttpClient) {
    console.log("API Service is alive!");
  }

  public getHello(): Observable<string> {
    return this.http.get("http://localhost:3000/").pipe(map(() => this.hello));
  }

  public getProfile(numberOfItem: number = 1): Observable<Profile[]> {
    const profiles: Profile[] = [];

    for (var i = 1; i <= numberOfItem; i++) {
      profiles.push(new Profile());
    }

    return this.http.get("http://localhost:3000/").pipe(map(() => profiles));
  }
}

export class Profile {
  title: string;
  subtitle: string;
  description: string;

  constructor(
    title: string = "Title",
    subtitle: string = "Subtitle",
    description: string = "Longest description ever"
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public http: HttpClient, private _sanitizer: DomSanitizer) { }
  public cars = [];
  getAllCars() {
    this.http.get("/api/getcars").subscribe(res => {
      console.log(res["result"]);
      res['result']['image'] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,'
        + res['result']['image']);
      this.cars = res["result"];
    });
  }
  add(id: any) {
    console.log(id);
  }

  ngOnInit() {
    this.getAllCars();
  }
}

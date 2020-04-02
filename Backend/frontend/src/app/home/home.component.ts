import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public http: HttpClient) {}
  public cars = [];
  getAllCars() {
    this.http.get("/api/getcars").subscribe(res => {
      console.log(res["result"]);
      this.cars = res["result"];
    });
  }

  ngOnInit() {
    this.getAllCars();
  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    public http: HttpClient,
    public router: Router,
    private _sanitizer: DomSanitizer
  ) {}
  public cars = [];
  public cart = [];
  getAllCars() {
    this.http.get("/api/getcars").subscribe(res => {
      console.log(res["result"]);
      res["result"]["image"] = this._sanitizer.bypassSecurityTrustResourceUrl(
        "data:image/jpeg;base64," + res["result"]["image"]
      );
      this.cars = res["result"];
    });
  }
  add(name: any, price: any, model: any) {
    this.cart.push({ name: name, price: price, model: model });
  }

  addToCart() {
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    this.router.navigateByUrl("/cart");
  }

  ngOnInit() {
    this.getAllCars();
  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public http: HttpClient, public router: Router) {}
  public cars = [];
  public cart = [];
  getAllCars() {
    this.http.get("/api/getcars").subscribe(res => {
      console.log(res["result"]);
      this.cars = res["result"];
    });
  }
  add(name: any, price: any, model: any) {
    console.log(name, price, model);
    this.cart.push({ name: name, price: price, model: model });
    console.log(this.cart);
  }

  addToCart() {
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    console.log(sessionStorage.getItem("cart"));
    this.router.navigateByUrl("/cart");
  }

  ngOnInit() {
    this.getAllCars();
  }
}

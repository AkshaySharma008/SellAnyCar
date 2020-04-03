import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor() {}
  public shopCart;
  ngOnInit() {
    if (sessionStorage.getItem("cart")) {
      this.shopCart = sessionStorage.getItem("cart");
      this.shopCart = JSON.parse(this.shopCart);
      console.log(this.shopCart);
    }
  }
}

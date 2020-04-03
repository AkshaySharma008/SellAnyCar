import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor() { }
  public shopCart;
  public total: Number = 0;
  ngOnInit() {
    if (sessionStorage.getItem("cart")) {
      this.shopCart = sessionStorage.getItem("cart");
      this.shopCart = JSON.parse(this.shopCart);
      console.log(this.shopCart);
      for (let i = 0; i < this.shopCart.length; i++) {
        this.total = +this.total + +this.shopCart[i]['price'];
      }
      console.log(this.total);
      sessionStorage.setItem("total", JSON.stringify(this.total));
    }
  }
}

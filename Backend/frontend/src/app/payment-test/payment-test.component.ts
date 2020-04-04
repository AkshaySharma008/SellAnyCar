import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios'


@Component({
  selector: "app-payment-test",
  templateUrl: "./payment-test.component.html",
  styleUrls: ["./payment-test.component.css"]
})
export class PaymentTestComponent implements OnInit {
  constructor(public http: HttpClient, public router: Router) { }
  public total;

  handler: any = null;
  ngOnInit() {
    this.loadStripe();
    this.total = sessionStorage.getItem("total");
    console.log(this.total);
  }


  async pay(amount) {
    var handler = (<any>window).StripeCheckout.configure({
      key: "pk_test_aeUUjYYcx4XNfKVW60pmHTtI",
      locale: "auto",
      token: function (token: any) {
        console.log(token);
        //alert("Token Created!!");
        tocall(amount, token);
      }
    })
    function tocall(amount, token) {
      //this.callApi(amount);
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      cart = {
        cart,
        amount,
        email: localStorage.getItem('email'),
        token: token.id
      }
      console.log("callApi Called");
      axios.post('/api/payment', cart)
        .then(function (response) {
          console.log(response);
          alert('Transaction Completed!!');
          window.location.href = "";
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    handler.open({
      name: "SellAnyCar",
      description: "Payment Gateway",
      amount: amount * 100
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }
}

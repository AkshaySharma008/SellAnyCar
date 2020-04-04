import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prev-orders',
  templateUrl: './prev-orders.component.html',
  styleUrls: ['./prev-orders.component.css']
})
export class PrevOrdersComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getOrders();
  }
  public orders;

  getOrders() {
    this.http.post("/api/getOrders", { email: localStorage.getItem('email') }).subscribe(res => {
      this.orders = res['result'];
      console.log(this.orders);
    })
  }

}

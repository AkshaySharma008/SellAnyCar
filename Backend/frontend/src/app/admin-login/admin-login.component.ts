import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public http: HttpClient) { }
  public loading = false;

  login(Data: NgForm) {
    this.loading = true;
    console.log(Data.value);
    this.http.post("/api/login", Data.value).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit() {
  }

}

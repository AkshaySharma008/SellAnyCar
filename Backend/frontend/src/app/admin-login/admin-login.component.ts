import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public http: HttpClient, public router: Router) { }
  public loading = false;

  login(Data: NgForm) {
    this.loading = true;
    console.log(Data.value);
    this.http.post("/api/login", Data.value).subscribe(res => {
      if (res['token']) {
        const token = res['token'];
        const email = res['email'];
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        this.router.navigateByUrl("/");
      }
      else {
        alert("Login Failed!!");
      }
      this.loading = false;
    })
  }

  ngOnInit() {
    if (localStorage.getItem('token'))
      this.router.navigateByUrl("/");
    else
      this.router.navigateByUrl("/login");
  }

}

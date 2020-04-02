import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public http: HttpClient, public router: Router) { }

  signup(Data: NgForm) {
    this.http.post("/api/signup", Data.value).subscribe(res => {
      console.log(res);
      if (res['success']) {
        alert("Congratulations!! You are registered. Now you can login!");
        this.router.navigateByUrl('/login');
      }
    })
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl("");
    }
  }

}

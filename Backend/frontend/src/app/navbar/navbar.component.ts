import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router) { }

  public name;

  ngOnInit() {
    this.name = localStorage.getItem("name");
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}

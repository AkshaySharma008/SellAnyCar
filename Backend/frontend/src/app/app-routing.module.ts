import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

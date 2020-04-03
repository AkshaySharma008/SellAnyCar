import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AuthGuard } from "./auth.guard";
import { SignupComponent } from "./signup/signup.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: AdminLoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "cart", component: CartComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

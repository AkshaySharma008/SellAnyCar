import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./cart/cart.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AuthGuard } from "./auth.guard";
import { SignupComponent } from "./signup/signup.component";
import { UploadComponent } from "./upload/upload.component";
import { PaymentTestComponent } from "./payment-test/payment-test.component";
import { PrevOrdersComponent } from './prev-orders/prev-orders.component';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: AdminLoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
  { path: "upload", component: UploadComponent },
  { path: "payment", component: PaymentTestComponent, canActivate: [AuthGuard] },
  { path: "orders", component: PrevOrdersComponent, canActivate: [AuthGuard] },
  { path: "**", component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

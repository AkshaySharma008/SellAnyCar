import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";

import { HttpClientModule } from "@angular/common/http";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./signup/signup.component";
import { CartComponent } from "./cart/cart.component";
import { UploadComponent } from "./upload/upload.component";
import { PaymentTestComponent } from "./payment-test/payment-test.component";
import { PrevOrdersComponent } from './prev-orders/prev-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminLoginComponent,
    SignupComponent,
    CartComponent,
    UploadComponent,
    PaymentTestComponent,
    PrevOrdersComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

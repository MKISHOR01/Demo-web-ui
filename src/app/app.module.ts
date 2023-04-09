import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HomeLandingpageComponent } from './home/home-landingpage/home-landingpage.component';
import { LoginComponent } from './home/login/login.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ProductsComponent } from './home/products/products.component';
import { ShoppingCartComponent } from './home/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeLandingpageComponent,
    LoginComponent,
    ContactUsComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

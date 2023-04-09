import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingpageComponent } from './home/home-landingpage/home-landingpage.component';
import { LoginComponent } from './home/login/login.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ProductsComponent } from './home/products/products.component';
import { ShoppingCartComponent } from './home/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './home/checkout/checkout.component';

const routes: Routes = [

  {path:'',component:HomeLandingpageComponent},
  {path:'login',component:LoginComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'products',component:ProductsComponent},
  {path:'shopping_cart',component:ShoppingCartComponent},
  {path:'checkout',component:CheckoutComponent},

  {
    path: "admin",
    loadChildren: () => import('./Routes/adminroute/adminroute.module').then(m => m.AdminrouteModule)
  },

  {path:'**',component:HomeLandingpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

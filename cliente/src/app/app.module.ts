import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { MainComponent } from './components/pages/main/main.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { DetailOffersComponent } from './components/pages/detail-offers/detail-offers.component';
import { StoresComponent } from './components/pages/stores/stores.component';
import { DetailStoresComponent } from './components/pages/detail-stores/detail-stores.component';
import { LoginComponent } from './components/forms/login/login.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { StoreRegisterComponent } from './components/forms/store-register/store-register.component';
import { ProductRegisterComponent } from './components/forms/product-register/product-register.component';
import { NewOfferComponent } from './components/forms/new-offer/new-offer.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { Page404Component } from './components/pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    AboutUsComponent,
    MainComponent,
    OffersComponent,
    DetailOffersComponent,
    StoresComponent,
    DetailStoresComponent,
    LoginComponent,
    ClientRegisterComponent,
    StoreRegisterComponent,
    ProductRegisterComponent,
    NewOfferComponent,
    ProfileComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

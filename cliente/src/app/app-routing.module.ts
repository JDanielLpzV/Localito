import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { StoresComponent } from './components/pages/stores/stores.component';
import { OffersComponent } from './components/pages/offers/offers.component';
const routes: Routes = [
  {
    path: 'inicio',
    component: MainComponent
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },
  {
    path: 'registrarse',
    component: ClientRegisterComponent
  },
  {
    path: 'sobre-nosotros',
    component: AboutUsComponent
  },
  {
    path: 'locales',
    component: StoresComponent
  },
  {
    path: 'ofertas',
    component: OffersComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

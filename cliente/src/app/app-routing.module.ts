import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { StoresComponent } from './components/pages/stores/stores.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ForgotPasswordComponent } from './components/forms/forgot-password/forgot-password.component';
import { StoreRegisterComponent } from './components/forms/store-register/store-register.component';
import { DetailStoresComponent } from './components/pages/detail-stores/detail-stores.component';
import { ListStoresComponent } from './components/list-stores/list-stores.component';
import { ListOfertasComponent } from './components/list-ofertas/list-ofertas.component';
import { DetailOffersComponent } from './components/pages/detail-offers/detail-offers.component';
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
    path: 'confirmacion',
    component: SendEmailComponent
  },
  {
    path: 'recuperar-contrasena',
    component: ForgotPasswordComponent
  },
  {
    path: 'registrar-localito',
    component: StoreRegisterComponent
  },
  {
    path: 'localito/:idlocalito',
    component: DetailStoresComponent
  },
  {
    path: 'admin/localitos',
    component: ListStoresComponent
  },
  {
    path: 'admin/ofertas',
    component: ListOfertasComponent
  },
  {
    path: 'oferta/:idoferta',
    component: DetailOffersComponent
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

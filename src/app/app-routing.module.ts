import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { ServiceComponent } from './user/service/service.component';
import { TeamComponent } from './user/team/team.component';
import { ContactComponent } from './user/contact/contact.component';
import { OfferComponent } from './user/offer/offer.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"about",
    component:AboutComponent,
  },
  {
    path:"service",
    component:ServiceComponent,
  },
  {
    path:"team",
    component:TeamComponent,
  },
  {
    path:"contact",
    component:ContactComponent,
  },
  {
    path:"offer",
    component:OfferComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,UserModule,AdminModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './_shared/navbar/navbar.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { HomeModule } from './home/home.component.module';
import { AuthModule } from './auth/auth.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingPagesComponent } from './landing-pages.component';

@NgModule({
  declarations: [
    LandingPagesComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    AuthModule,
    LandingRoutingModule
  ],
  exports: [
    LandingPagesComponent,
    NavbarComponent,
    FooterComponent,
  ]
})
export class LandingPagesModule { }

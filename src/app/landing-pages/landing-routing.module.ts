import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPagesComponent } from './landing-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.component.module').then(m => m.HomeModule),
      },
      {
        path: 'inspiration',
        loadChildren: () => import('./inspiration/inspiration.module').then(m => m.InspirationModule),
      },
      {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
      },
      {
        path: 'datasheet',
        loadChildren: () => import('./datasheet/datasheet.module').then(m => m.DatasheetModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

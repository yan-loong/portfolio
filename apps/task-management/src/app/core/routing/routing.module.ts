import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':lang',
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../features/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'ka',
    pathMatch: 'full'
  },

  {
    path: '**',
    loadChildren: () => import('../../features/not-found/not-found.module').then(m => m.NotFoundModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

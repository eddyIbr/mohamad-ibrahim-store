import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products/all' },
  { path: 'products/:category', loadComponent: () => import('./app.component').then(m => m.AppComponent) },
  { path: '**', redirectTo: 'products/all' }
];

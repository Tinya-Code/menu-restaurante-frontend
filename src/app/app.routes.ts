import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Food Discovery | Red de Restaurantes',
    loadComponent: () => import('./page/home-restaurante/home-restaurante').then(m => m.HomeRestaurante)
  },
  {
    path: 'menu/:slug',
    title: 'Menú | Restaurante',
    loadComponent: () => import('./page/menu/menu').then(m => m.Menu)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

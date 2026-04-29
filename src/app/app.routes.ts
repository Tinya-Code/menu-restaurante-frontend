import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'menu',
    loadComponent: () =>
      import('./share/layout/restaurant-layout/restaurant-layout.component').then(
        (m) => m.RestaurantLayout,
      ),
    children: [
      {
        path: ':slug',
        title: 'Menú | Restaurante',
        loadComponent: () => import('./feature/restaurant/page/menu/menu').then((m) => m.Menu),
      },
      {
        path: ':slug/info/:theme',
        title: 'Sobre Nosotros | Restaurante',
        loadComponent: () =>
          import('./feature/restaurant/page/restaurant-info/restaurant-info').then(
            (m) => m.RestaurantInfoComponent,
          ),
      },
      {
        path: '**',
        title: '404 | Menú no encontrado',
        loadComponent: () =>
          import('./feature/restaurant/page/not-found/not-found.component').then(
            (m) => m.RestaurantNotFoundComponent,
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./share/layout/portal-user-layout/portal-user-layout.component').then(
        (m) => m.PortalUserLayout,
      ),
    children: [
      {
        path: '',
        title: 'Food Discovery | Red de Restaurantes',
        loadComponent: () =>
          import('./feature/portal/page/home-restaurante/home-restaurante').then(
            (m) => m.HomeRestaurante,
          ),
      },
      {
        path: 'register',
        title: 'Registro | Crea tu Menú',
        loadComponent: () =>
          import('./feature/user/page/register-page/register-page').then((m) => m.RegisterPage),
      },
      {
        path: '**',
        title: '404 | Página no encontrada',
        loadComponent: () =>
          import('./feature/portal/page/not-found/not-found.component').then(
            (m) => m.NotFoundComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

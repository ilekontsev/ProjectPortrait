import { Route } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'promo',
    loadChildren: () => import('./pages/promo/promo.module').then((m) => m.PromoModule),
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: AppComponent,
    pathMatch: 'full',
  },
];

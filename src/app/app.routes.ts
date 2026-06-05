import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':uuid',
    loadComponent: () => import('./pasport/passport.component').then((m) => m.Passport),
  },
];

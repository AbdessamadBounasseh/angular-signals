import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full',
  },
  {
    path: 'signal',
    loadComponent: () =>
      import('./components/signal/signal.component').then(c => c.SignalComponent),
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./components/parent/parent.component').then(c => c.ParentComponent),
  }
];

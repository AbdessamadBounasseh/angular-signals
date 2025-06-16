import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./components/search-parent/search-parent.component').then(c => c.SearchParentComponent),
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

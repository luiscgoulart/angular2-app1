import { RouterConfig } from '@angular/router';

import {HomeComponent} from './home.component';
import {EntityListComponent} from './entity-list.component';
import {EntityDetailComponent} from './entity-detail.component';

export const HomeRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    terminal: true
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: EntityListComponent},
      {path: 'entity-detail', component: EntityDetailComponent}
    ]
  }
];

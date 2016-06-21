import { RouterConfig } from '@angular/router';

import {EntityListComponent} from './entity-list.component';
import {EntityDetailComponent} from './entity-detail.component';

export const HomeRoutes: RouterConfig = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'entity-list', component: EntityListComponent},
      {path: 'entity-detail', component: EntityDetailComponent}
    ]
  }
];

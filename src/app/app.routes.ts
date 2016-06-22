import { provideRouter, RouterConfig } from '@angular/router';
//import {LoginComponent} from './login/login.component';
//import {HomeComponent} from './home/home.component';

import {HomeRoutes} from './home/home.routes';
import {LoginRoutes} from './login/login.routes';
//import {EntityListComponent} from './home/entity-list.component';
//import {EntityDetailComponent} from './home/entity-detail.component';

export const routes: RouterConfig = [
  //{ path: 'login', component: LoginComponent },
  ...LoginRoutes,
  ...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router, RouterOutlet, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { ROUTER_DIRECTIVES, RouterOutletMap } from '@angular/router';

import { AppState } from './app.service';
import { RouterActive } from './router-active';

//import {HomeRoutes} from './home/home.routes';

import { HomeComponent } from './home';
import {LoginComponent} from './login/login.component';
//import {EntityListComponent} from './home/entity-list.component';
//import {EntityDetailComponent} from './home/entity-detail.component';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ RouterOutletMap ],
  directives: [ RouterActive, ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.css')
  ],
  template: require('./app.component.html')
})

@RouteConfig([
  { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
  { path: '/home/...',  name: 'Home',  component: HomeComponent }/*,
  { path: '/home/entity-list', name: 'EntityList', component: EntityListComponent },
  { path: '/home/entity-detail', name: 'EntityDetail', component: EntityDetailComponent }*/
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  //{ path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    private router: Router,
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

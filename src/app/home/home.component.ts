import {Component} from 'angular2/core';
import {LoginService} from '../login/login.service';
import {User} from '../login/user';

import { RouteConfig, Router, RouterOutlet, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {EntityListComponent} from './entity-list.component';
import {EntityDetailComponent} from './entity-detail.component';

@Component({
    //selector: 'login-form',
    providers: [ LoginService, ROUTER_PROVIDERS ],
    template: require('./home.component.html'),
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  //{ path: '/*', redirectTo: 'EntityList', },
  { path: '/home/entity-list', name: 'EntityList', component: EntityListComponent, useAsDefault: true },
  { path: '/home/entity-detail', name: 'EntityDetail', component: EntityDetailComponent }
])

export class HomeComponent {

    currentUserId: User = JSON.parse(localStorage.getItem("user"));

    constructor(
        private router: Router,
        private _service:LoginService){}

    ngOnInit(){
        this._service.checkCredentials();
        //console.log(this.currentUserId.email);
    }

    logout() {
        this._service.logout();
    }
}

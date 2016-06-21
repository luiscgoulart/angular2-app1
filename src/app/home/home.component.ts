import {Component} from 'angular2/core';
import {LoginService} from '../login/login.service';
import {User} from '../login/user';
import {EntityListComponent} from './entity-list.component';
import {EntityDetailComponent} from './entity-detail.component';
import { RouteConfig, Router } from '@angular/router-deprecated';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'login-form',
    providers: [LoginService],
    template: require('./home.component.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {

    currentUserId: User = JSON.parse(localStorage.getItem("user"));

    constructor(
        private router: Router,
        private _service:LoginService){}

    ngOnInit(){
        this._service.checkCredentials();
        console.log(this.currentUserId.email);
    }

    logout() {
        this._service.logout();
    }
}

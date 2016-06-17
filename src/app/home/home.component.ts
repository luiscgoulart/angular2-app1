import {Component} from 'angular2/core';
import {LoginService} from '../login/login.service';
import {User} from '../login/user';
 
@Component({
    selector: 'login-form',
    providers: [LoginService],
    template: require('./home.component.html')
})
 
export class HomeComponent {

    currentUserId: User = JSON.parse(localStorage.getItem("user"));
 
    constructor(
        private _service:LoginService){}
 
    ngOnInit(){
        this._service.checkCredentials();
        console.log(this.currentUserId.email);
    }
 
    logout() {
        this._service.logout();
    }
}

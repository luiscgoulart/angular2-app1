import {Component, ElementRef} from 'angular2/core';
import {LoginService} from './login.service';
import {User} from './user';
 
@Component({
    selector: 'login-form',
    providers: [LoginService],
    template: require('./login.component.html'),
    styles: [require('./login.component.css')]
})
 
export class LoginComponent {
 
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:LoginService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}

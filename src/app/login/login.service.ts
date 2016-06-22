import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

import {User} from './user';

var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23'),
  new User('qwerty@qwerty.com', 'qwerty')
];

@Injectable()
export class LoginService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['Home']);
      //console.log("user = " + localStorage.getItem("user"));
      return true;
    }
    return false;

  }

   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  }
}

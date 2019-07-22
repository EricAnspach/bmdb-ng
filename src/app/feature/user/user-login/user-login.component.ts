import { SystemService } from './../../../service/system.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user.class';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
	message: string = '';
	user: User = new User(0, '', '', false);
  jr: JsonResponse;
  
  ngOnInit() {
        // defaulting uname and pwd for testing purposes
        this.user.userName = 'admin';
        this.user.password = 'admin';
  }

	login() {
    if (this.user.userName == 'admin' && this.user.password == 'admin') {
      this.user.isAdmin = true;
      this.sysSvc.data.user.instance = this.user;
      console.log("true");
    } else {
      this.user.isAdmin = false;
      this.sysSvc.data.user.instance = this.user;
      console.log("false");
    }
    console.log(this.user);
    console.log(this.sysSvc.data.user.instance);
    this.router.navigateByUrl('/actor/list');
	}

  constructor(private userSvc: UserService, 
    private sysSvc: SystemService,
    private router: Router) { }

}

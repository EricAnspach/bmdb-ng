import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = new User(0, '', '', false);


  constructor(private router: Router,
              private sysSvc: SystemService) { }

  ngOnInit() {
    this.sysSvc.data.user.instance = this.user;

    this.user.userName = 'user';
    this.user.password = 'user';
  }

  login() {
    this.router.navigateByUrl('user/');
	}

}

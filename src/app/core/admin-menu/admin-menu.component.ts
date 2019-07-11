import { Component, OnInit } from '@angular/core';
import { AdminMenu } from 'src/app/model/admin-menu.class';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  menuItems: AdminMenu[] = [
    new AdminMenu("Home","/home","Leave the admin site"),
    new AdminMenu("Actor","/actor/list","List the actors"),
    new AdminMenu("Movie","/movie/list","List the movies"),
    new AdminMenu("Genre","/genre/list","List the genres"),
    new AdminMenu("Credit","/credit/list","List the credits"),
    new AdminMenu("Genres of Movies","/moviegenre/list","List the genres linked to movies")
  ];

  constructor() { }

  ngOnInit() {
  }

}

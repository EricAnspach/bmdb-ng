import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
    new Menu("Home","/home","Return to the home page"),
    new Menu("Actor","/actor/list","List the actors"),
    new Menu("Movie","/movie/list","List the movies"),
    new Menu("Genre","/genre/list","List the genres"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
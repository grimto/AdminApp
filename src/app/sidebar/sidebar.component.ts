import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}
// routes for collections
export const ROUTES: RouteInfo[] = [
  { path: '/', title: 'Dashboard', class: ''},
  { path: '/dialogdata', title: 'Dialog Data', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any [];

  constructor() { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}

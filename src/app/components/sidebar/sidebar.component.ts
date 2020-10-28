import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/_services/authentication.service';
import { User } from 'app/_models/user';
import { Role } from 'app/_models/role';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  requiredRole: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/entregas', title: 'Entregas',  icon: 'book', class: '', requiredRole: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: User;
  menuItems: any[];

  constructor( 
    private router: Router,
    private authenticationService: AuthenticationService) { 
      
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem); 
  }

  hasRole(role) {
    if(role != '') {
      return this.currentUser && this.currentUser.role === role;
    }

    return true;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/landing']);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

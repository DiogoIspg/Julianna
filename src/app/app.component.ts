import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';
import { Role } from './_models/role';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    shouldLoadBars() {
        return this.router.url.indexOf('landing') !== -1 
        && this.router.url.indexOf('costumize') !== -1;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/landing']);
    }
}
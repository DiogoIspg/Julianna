import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from 'app/_services/user.service';
import { User } from 'app/_models/user';


@Component({templateUrl: 'admin.component.html'})
export class AdminComponent implements OnInit {
    constructor(private userService: UserService) {}

    users: User[];

    ngOnInit() {
        
    }
}
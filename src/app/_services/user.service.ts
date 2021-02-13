import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserPass } from 'app/_models/user';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getCurrentUser() {
        let userId = JSON.parse(localStorage.getItem('currentUser')).userId
        return this.http.get<User>(`${environment.apiUrl}/user/${userId}`);
    }

    updateUserEmail(newEmail: string) {
        let userId = JSON.parse(localStorage.getItem('currentUser')).userId
        return this.http.put<User>(`${environment.apiUrl}/user/${userId}/updateEmail`, JSON.stringify({newEmail: newEmail}) );
    }

    changePassword(newPassword: string) {
        let userId = JSON.parse(localStorage.getItem('currentUser')).userId
        return this.http.put<User>(`${environment.apiUrl}/user/${userId}/updatePassword`, JSON.stringify({newPassword: newPassword}));
    }

}
import {BehaviorSubject} from 'rxjs';   
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GlobalService {
    savedJ = new BehaviorSubject(this.theSavedJ);
    orders = new BehaviorSubject(this.theOrders);
    user = new BehaviorSubject(this.theUser);

 set theSavedJ(value) {
   this.savedJ.next(value);
   localStorage.setItem('savedJ', value);
 }

 get theSavedJ() {
   return localStorage.getItem('savedJ');
 }

 set theOrders(value) {
    this.orders.next(value);
    localStorage.setItem('orders', value);
  }

  get theOrders() {
    return localStorage.getItem('orders');
  }

  set theUser(value) {
    this.orders.next(value);
    localStorage.setItem('currentUser', value);
  }

  get theUser() {
    return localStorage.getItem('currentUser');
  }


}
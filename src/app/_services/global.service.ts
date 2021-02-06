import {BehaviorSubject} from 'rxjs';   
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GlobalService {
 itemValue = new BehaviorSubject(this.savedJ);

 set savedJ(value) {
   this.itemValue.next(value);
   localStorage.setItem('savedJ', value);
 }

 get savedJ() {
   return localStorage.getItem('savedJ');
 }


}
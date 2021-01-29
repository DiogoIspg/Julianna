import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjewels',
  templateUrl: './myjewels.component.html',
  styleUrls: ['./myjewels.component.css']
})
export class MyjewelsComponent implements OnInit {

  allJewelries = [];
  priceSum = 0;

  constructor() {
    this.allJewelries = JSON.parse(localStorage.getItem('savedJ'));
    this.allJewelries.forEach(x => this.priceSum += parseInt(x.price));
  }

  addToCart(i) {
    let orders = [];
    if(localStorage.getItem('orders')) {
      orders = JSON.parse(localStorage.getItem('orders'));
    }

    orders.push(this.allJewelries[i]);
  }

  delete(i) {
    this.allJewelries = [...this.allJewelries.slice(0,i), ...this.allJewelries.slice(i+1, this.allJewelries.length)]
    this.priceSum = 0;
    this.allJewelries.forEach(x => this.priceSum += parseInt(x.price));
    localStorage.setItem('savedJ', JSON.stringify(this.allJewelries));
  }

  ngOnInit(): void {
  }

}

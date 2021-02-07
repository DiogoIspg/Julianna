import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@/_services/global.service';

@Component({
  selector: 'app-myjewels',
  templateUrl: './myjewels.component.html',
  styleUrls: ['./myjewels.component.css']
})
export class MyjewelsComponent implements OnInit {

  allJewelries = [];
  priceSum = 0;

  constructor(private globalServ : GlobalService) {
    this.allJewelries = JSON.parse(globalServ.theSavedJ) ?? [];

    if(this.allJewelries)
      this.allJewelries.forEach(x => this.priceSum += parseInt(x.price));
  }

  delete(i) {
    this.allJewelries = [...this.allJewelries.slice(0,i), ...this.allJewelries.slice(i+1, this.allJewelries.length)]
    this.priceSum = 0;
    this.allJewelries.forEach(x => this.priceSum += parseInt(x.price));
    this.globalServ.theSavedJ = JSON.stringify(this.allJewelries);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@/_services/global.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  allOrders = [];

  constructor(
    private glbService: GlobalService
  ) {
    this.allOrders = JSON.parse(glbService.theOrders) ?? [];
  }

  ngOnInit(): void {
  }

}

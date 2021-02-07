import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '@/_services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private glbService: GlobalService,
    private _snackBar: MatSnackBar
    ) { 

    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      billaddress: '',
      billaddress2: '',
      country: '',
      city: '',
      phoneNumber: '',
      cardNumber: '',
      cardNumberCcv: '',
      cardExpiration: '',
    });
  }

  ngOnInit(): void {
  }

  purchase() {

    let orders = [];
    let saved = JSON.parse(this.glbService.theSavedJ);

    if(this.glbService.theOrders) {
      orders = JSON.parse(this.glbService.theOrders);
    }

    let order = this.checkoutForm.value;
    order.items = [...saved];
    order.date = new Date();

    orders.push(order);
    this.glbService.theOrders = JSON.stringify(orders);
    this.glbService.theSavedJ = '[]';

    this._snackBar.open("Purchase confirmed!", "Ok", {
      duration: 3000,
    })

    this.router.navigate(['MyOrders']);
  }

}

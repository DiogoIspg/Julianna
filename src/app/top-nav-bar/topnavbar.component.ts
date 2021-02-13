import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '@/_models/user';
import { GlobalService } from '@/_services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopNavBarComponent implements OnInit {

  isLoggedIn = false;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  user: User;
  error = '';
  items = [];
  itemCount = 0;

  inRegister = false;
  inLogin = true;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private globalServ: GlobalService,
    private _snackBar: MatSnackBar
    ) {
      this.items = JSON.parse(globalServ.theSavedJ) ?? [];

      if(this.items)
        this.itemCount = this.items.length;

      this.globalServ.savedJ.subscribe(x => {
        this.items = JSON.parse(x) ?? [];

        if(this.items.length !== 0) {
          if(this.itemCount < this.items.length ) {
            this._snackBar.open("Added item to cart!", "Ok", {
              duration: 3000,
            })
          } else if(this.itemCount > this.items.length) {
            this._snackBar.open("Removed item from cart!", "Ok", {
              duration: 3000,
            })
          }
        }
       
        this.itemCount = this.items.length;
      });
    this.globalServ.user.subscribe(x => this.user = JSON.parse(x));
  }

  toRegister() {
    this.inRegister = true;
    this.inLogin = false;
  }

  backToLogin() {
    this.inRegister = false;
    this.inLogin = true;
  }
  

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
    if(this.globalServ.theUser) {
      this.isLoggedIn = true;
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: [''],
  });
  }

  logout() {
    this.isLoggedIn = false;
    this.auth.logout();
    this.router.navigate(['/landing']);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;

    if(this.f.email.value !== '') {
      this.auth.register(this.f.username.value, this.f.password.value, this.f.email.value)
      .pipe(first())
      .subscribe(
          data => {
              let els = document.getElementsByClassName("modal-backdrop");
              while (els.length > 0) els[0].remove();

              let el = document.getElementById("loginModal");
              el.remove();
            
              this.isLoggedIn = true;
              this.router.navigate([this.returnUrl]);
          },
          error => {
              console.log(error);
              this.error = error;
              this.loading = false;
          });
    }
    else {
      this.auth.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          data => {
              let els = document.getElementsByClassName("modal-backdrop");
              while (els.length > 0) els[0].remove();

              let el = document.getElementById("loginModal");
              el.remove();
            
              this.isLoggedIn = true;
              this.router.navigate([this.returnUrl]);
          },
          error => {
              console.log(error);
              this.error = error;
              this.loading = false;
          });
    }
  }

  get f() { return this.loginForm.controls; }

}

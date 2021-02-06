import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '@/_models/user';

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

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    ) {
      if (localStorage.getItem('savedJ')) {
        this.items = JSON.parse(localStorage.getItem('savedJ'))
      }

      localStorage.getItem('savedJ')
     }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.user = this.auth.currentUserValue;

    if(localStorage.getItem("currentUser")) {
      this.isLoggedIn = true;
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
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

  get f() { return this.loginForm.controls; }

}

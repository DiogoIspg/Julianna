import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { EntregasComponent } from './entregas/entregas.component';
import { AgmCoreModule } from '@agm/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { AdminComponent } from './admin/admin.component';
import { LandingPageComponent } from './landing-page/landing.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio'; 
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { CostumizeComponent } from './costumize/costumize.component';
import { TopNavBarComponent } from './top-nav-bar/topnavbar.component';
import { MyjewelsComponent } from './myjewels/myjewels.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MyordersComponent } from './myorders/myorders.component';
import {MatExpansionModule} from '@angular/material/expansion'; 
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserModule,
    MatRadioModule,
    MatExpansionModule,
    // AgmCoreModule.forRoot({
      //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
      // })
    ],
  declarations: [
    LandingPageComponent,
    AppComponent,
    EntregasComponent,
    AdminComponent,
    CostumizeComponent,
    TopNavBarComponent,
    MyjewelsComponent,
    CheckoutComponent,
    MyordersComponent,
  ],
  providers: [  
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide : LocationStrategy , useClass: HashLocationStrategy },
    
    // provider used to create fake backend uncomment this line for the fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

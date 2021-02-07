import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/_guards/auth.guard';
import { Role } from 'app/_models/role';

import { EntregasComponent } from './entregas/entregas.component';
import { LandingPageComponent } from './landing-page/landing.component';
import { CostumizeComponent } from './costumize/costumize.component';
import { MyjewelsComponent } from './myjewels/myjewels.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyordersComponent } from './myorders/myorders.component';

export const appRoutes: Routes = [
    { 
        path: 'Checkout', 
        component: CheckoutComponent, 
        canActivate: [AuthGuard], 
    },
    { 
        path: 'MyJewelries', 
        component: MyjewelsComponent, 
        canActivate: [AuthGuard], 
    },
    { 
        path: 'landing', 
        component: LandingPageComponent 
    },
    { 
        path: 'costumize', 
        component: CostumizeComponent, 
    },
    { 
        path: 'MyOrders', 
        component: MyordersComponent, 
    },
    
    // otherwise redirect to home
    { path: '**', redirectTo: 'landing' }
];

export const routing = RouterModule.forRoot(appRoutes);


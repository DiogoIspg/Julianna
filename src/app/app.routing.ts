import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/_guards/auth.guard';
import { Role } from 'app/_models/role';

import { EntregasComponent } from './entregas/entregas.component';
import { LandingPageComponent } from './landing-page/landing.component';
import { CostumizeComponent } from './costumize/costumize.component';

export const appRoutes: Routes = [
    { 
        path: 'entregas',      
        component: EntregasComponent,
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
    // otherwise redirect to home
    { path: '**', redirectTo: 'entregas' }
];

export const routing = RouterModule.forRoot(appRoutes);


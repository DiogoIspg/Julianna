import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/_guards/auth.guard';
import { Role } from 'app/_models/role';

import { IconsComponent } from './icons/icons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing.component';

export const appRoutes: Routes = [
    { 
        path: 'dashboard',      
        component: DashboardComponent,
        canActivate: [AuthGuard], 
    },
    { 
        path: 'landing', 
        component: LandingPageComponent 
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes);


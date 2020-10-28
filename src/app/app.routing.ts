import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/_guards/auth.guard';
import { Role } from 'app/_models/role';

import { IconsComponent } from './icons/icons.component';
import { EntregasComponent } from './entregas/entregas.component';
import { LandingPageComponent } from './landing-page/landing.component';

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
    // otherwise redirect to home
    { path: '**', redirectTo: 'entregas' }
];

export const routing = RouterModule.forRoot(appRoutes);


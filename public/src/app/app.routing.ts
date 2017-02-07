import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RacelogComponent } from './components/racelog/racelog.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent

    },{
        path: 'dashboard',
        component: DashboardComponent

    },{
        path: 'racelog',
        component: RacelogComponent

    },{
        path:'profile',
        component: ProfileComponent
    }

];

export const appRoutingProviders: any [] =[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

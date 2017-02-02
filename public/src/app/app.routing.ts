import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RacelogComponent } from './components/racelog/racelog.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent

    },{
        path: 'racelog',
        component: RacelogComponent

    }

];

export const appRoutingProviders: any [] =[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    constructor(private auth:Auth){

    }
    title = 'racelocal2017 dashboard!';
}

import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
    selector: 'racelog',
    templateUrl: './racelog.component.html',
    styleUrls: ['./racelog.component.css']
})


export class RacelogComponent {
    constructor(private auth:Auth){

    }
    title = 'racelocal2017 racelog!'
    dates = 'January 28th'
    racetitle = 'Polar Bear Challenge'
    
}

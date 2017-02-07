import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GetRaces } from '../../services/getraces.service';
import { RaceVenueComponent } from '../racevenue/racevenue.component';


@Component({
    selector: 'racelog',
    templateUrl:'./racelog.component.html',
    styleUrls: ['./racelog.component.css']
})


export class RacelogComponent {
    constructor(private auth:Auth){

    }
    
    //races = GetRaces.getRaces();
 
}

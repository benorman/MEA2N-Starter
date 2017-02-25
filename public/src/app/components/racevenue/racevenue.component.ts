import { Component } from '@angular/core';

import { Races } from '../../model/races.model';
import { OnInit } from '@angular/core';

import { GetRaces } from '../../services/getraces.service';



@Component({
    selector: 'racevenue',
    templateUrl: './racevenue.component.html',
    styleUrls: ['./racevenue.component.css'],
    providers: [GetRaces]
})


export class RaceVenueComponent implements OnInit {

   races : any[];
    public width: number;
    public height: number;
    lapCount: number = 2;
    
    
    constructor(private raceService: GetRaces){

        this.raceService = raceService;


    }

    getRaces(): void {
        this.races = this.raceService.getRaces();
        console.log(this.races);
    }

    ngOnInit(): void {
        this.getRaces();
    }


    countChange(count: number){
        this.lapCount = count;
        console.log("Updated Parent Lap Count to " + this.lapCount);
    }



}

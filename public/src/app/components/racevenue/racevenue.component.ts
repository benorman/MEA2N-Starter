import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { Races } from '../../model/races.model';

@Component({
    selector: 'racevenue',
    templateUrl: './racevenue.component.html',
    styleUrls: ['./racevenue.component.css']
})


export class RaceVenueComponent {
    constructor(private auth:Auth, private races: Races){

    }

    ID = this.races.ID;
    title = this.races.title;
    location = this.races.location;
    address = this.races.address;
    milesPerLap = this.races.milesPerLap;
    date = this.races.date;
    hasCompetativeLap = this.races.hasCompetativeLap;
    isNonOCREvent = this.races.isNonOCREvent;
    nonOCREvents = this.races.nonOCREvents;
    isMultiLapEvent = this.races.isMultiLapEvent;
    isRelayRace = this.races.isRelayRace;
    RelayRaceRacers = this.races.RelayRaceRacers;
    image = this.races.image;
    website = this.races.website;
    active = this.races.active;

}

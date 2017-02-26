
import { Injectable }      from '@angular/core';
import { Router } from '@angular/router';
import { RACES } from '../model/mock.data'
import { Races } from '../model/races.model'
import * as _ from "lodash";

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import {RacesCompleted} from '../model/raceCompleted.model'

//if its injectable, you need to inject it into a components who wants to call the service constructor
@Injectable()
export class GetRaces {

    API_URL = 'http://localhost:3000';



     constructor(private router: Router, public authHttp: AuthHttp) {



            };


    public getRaceVenueTitles(): Observable<any> {
        console.log("Getting Race Venue Titles");

        return this.authHttp.get(`${this.API_URL}/api/race/racevenuetitles`)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error || 'Server error')
            );
        //console.log(res.statusCode);

    }


    public getRaceVenues(): Observable<any> {
        console.log("Getting Race Venues");

        return this.authHttp.get(`${this.API_URL}/api/race/racevenues`)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error || 'Server error')
            );
        //console.log(res.statusCode);

    }


    public getRaceVenueDetails(id:string): Observable<any> {
        console.log("Creating a Spahten Profile!!");

        return this.authHttp.get(`${this.API_URL}/api/race/racevenuedetails/`+id)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error || 'Server error')
            );
        //console.log(res.statusCode);

    }

    public calculateRacePoints(racevenue: any, event: string){
        
        var eventName = event;
        var raceVenueNonOCREvents = racevenue.nonOCREvents;
        var raceComplete = new RacesCompleted;

        raceComplete.id  = racevenue.ID;
        raceComplete.laps = 0;
        raceComplete.event = event;
        raceComplete.competitiveLap = false;

        //lodash find by event in an array of event objects, we are looking for the race event object that matches
        //what the user selected and returning it so we can grab the miles and calculate points.

       var ranRace = _.find(raceVenueNonOCREvents, function(race) {

            return  race.name == event
        });

        raceComplete.racePoints = this.getPointCountForMiles(parseFloat(ranRace.miles));


        console.log("Constructed Event Object is  " + JSON.stringify(raceComplete));






        

    }

    private getPointCountForMiles(miles:number): number {

        console.log("Mileage for calcuation is " + miles);
        var points
        //this takes the number of miles and based off the value sets the points value

            //reads like this: if miles is greater than 0 AND less than 4.75, then points are 10
            if(miles > 0 && miles <= 4.75){ points = 10;}

            else if( miles > 4.75 && miles <= 9.75)  { points = 15;}
            else if( miles > 9.75 && miles <= 14.75) { points = 20;}
            else if( miles > 14.75 && miles <= 19.75){ points = 25;}
            else if( miles > 19.75 && miles <= 29.75){ points = 30;}
            else if( miles > 29.75 && miles <= 39.75){ points = 35;}
            else if( miles > 39.75 && miles <= 49.75){ points = 40;}
            else if( miles > 49.75 && miles <= 59.75){ points = 45;}
            else if( miles > 59.75){points = 50;}


        return points;

    }

}
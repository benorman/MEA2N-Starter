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
    raceVenues: any[];
    public width: number;
    public height: number;
    lapCount: number = 0;
    nonOCREvent: string;
    
    
    constructor(private raceService: GetRaces){
        this.raceService = raceService;
    }



    private getRaceVenueTitles():void{

            this.raceService.getRaceVenueTitles().subscribe(
                response => {
                    console.log("RACE VENUES ARE: " + response.raceVenues2017);
                    this.raceVenues = response.raceVenues2017;
                    
                },
                err => {
                    console.log(err);
                }
            )
        }
        

    getRaceVenueDetails(id:string): void {



        this.raceService.getRaceVenueDetails(id).subscribe(
            response => {
                console.log(response.raceVenues2017);
                this.raceVenues = response.raceVenues2017;

            },
            err => {
                console.log(err);
            }
        )
    }


    getRaceVenues(): void {



        this.raceService.getRaceVenues().subscribe(
            response => {
                console.log(response.raceVenues2017);
                this.raceVenues = this.sortByKey(response.raceVenues2017, "ID");

            },
            err => {
                console.log(err);
            }
        )
    }



    logNonOCREvent(venue: any, event: string): void {

        this.nonOCREvent = event;

        if(event === "none"){
            return
        }else {

            this.raceService.calculateRacePoints(venue, event);
        }

    }


    ngOnInit(): void {
       this.getRaceVenues();
    }


    countChange(count: number){
        this.lapCount = count;
        console.log("Updated Parent Lap Count to " + this.lapCount);
    }

    sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

}

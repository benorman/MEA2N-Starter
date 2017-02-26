export class Spahten {

    id:string = "";
    name:string = "";
    email:string = "";
    streetAddress:string = "";
    city:string = "";
    state:string = "";
    zip:string = "";
    racesCompleted:{id:string, laps:number, event:string, competitiveLap:boolean, racePoints:number}[] = [
        {
            "id": "",
            "laps": 0,
            "event": "",
            "competitiveLap": false,
            "racePoints": 0

        }
    ];
    racesRun:number = 0;
    totalPoints:number = 0;
    image:string = "https://s23.postimg.org/skduasghn/NE_Spahtens_FINAL.png";

}
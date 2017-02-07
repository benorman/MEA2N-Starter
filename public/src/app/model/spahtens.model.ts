export class Spahten {

    _id:string = "";
    name:string = "";
    email:string = "";
    streetAddress:string = "";
    city:string = "";
    state:string = "";
    zip:string = "";
    racesCompleted:{id:string, laps:number, competitiveLap:boolean, racePoints:number}[] = [
        {
            "id": "",
            "laps": 0,
            "competitiveLap": false,
            "racePoints": 0

        }
    ];
    racesRun:number = 0;
    totalPoints:number = 0;
    image:string = "https://s23.postimg.org/skduasghn/NE_Spahtens_FINAL.png";

}
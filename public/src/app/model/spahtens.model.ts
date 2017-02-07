export class Spahten {


    name:string = "";
    email:string = "";
    streetAddress:string = "";
    city:string = "";
    state:string = "";
    zip:number = 0;
    racesCompleted:{id:string, laps:number, competativeLap:boolean, racePoints:number}[] = [
        {
            "id": "",
            "laps": 0,
            "competativeLap": false,
            "racePoints": 0

        }
    ];
    racesRun:number = 0;
    totalPoints:number = 0;
    image:string = "https://s23.postimg.org/skduasghn/NE_Spahtens_FINAL.png";

}
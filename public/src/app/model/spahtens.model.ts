
export class Spahtens {


        name: string;
        email: string;
        streetAddress: string;
        city: string;
        state: string;
        zip: number;
        racesCompleted: [{
            id: number,
            laps: number,
            competitiveLap: boolean,
            racePoints: number
        }];
        racesRun: number;
        totalPoints: number;
        image: string;

}
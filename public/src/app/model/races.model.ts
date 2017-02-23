
export class Races{

    ID: string;
    title: string;
    location: string;
    address: string;
    milesPerLap: number;
    date: string;
    eventType: string;
    hasCompetativeLap: boolean;
    isNonOCREvent: boolean;
    nonOCREvents: [{name: string, miles: string, ran: boolean}];
    isMultiLapEvent: boolean;
    isRelayRace: boolean;
    RelayRaceRacers: number;
    image: string;
    website: string;
    active: boolean;
    show: boolean;
    hide: boolean;
    

};
import {Races} from './races.model';

/*

Template Data:

 "ID": string,
 "title": string,
 "location": string,
 "address": string,
 "milesPerLap": number,
 "date": string,
 "hasCompetativeLap": boolean,
 "isNonOCREvent": boolean,
 "isMultiLapEvent": boolean,
 "isRelayRace":boolean,
 "RelayRaceRacers": number,
 "image": string,
 "website": string

 */


export const RACES: Races [] =[{
    "ID":"1A",
    "title": "Blizzard Blast",
    "location": "42°37'50.9\"N 71°17'22.3\"W",
    "address": "Shed Park/Fort Hill, Lowell MA",
    "milesPerLap": 3.2,
    "date": "Sunday, January 29th, 2017",
    "hasCompetativeLap": false,
    "isNonOCREvent": false,
    "nonOCREvents":  false,
    "isMultiLapEvent": true,
    "isRelayRace":false,
    "RelayRaceRacers": 0,
    "image": "https://s29.postimg.org/n69yotezb/blizzardblast.png",
    "website":"http://www.blizzardblastrun.com/",
    "active": true,
    "show": false,
    "hide":true


},{

    "ID": "2A",
    "title": "Polar Bear Challenge",
    "location": "43°42'22.5\"N 73°18'21.6\"W",
    "address": "Shale Hill Adventure Farms, 517 Lake Road. Benson, VT 05731",
    "milesPerLap": 6.0,
    "date": "Saturday, February 4th, 2017",
    "hasCompetativeLap": true,
    "isNonOCREvent": false,
    "nonOCREvents":  false,
    "isMultiLapEvent": true,
    "isRelayRace":false,
    "RelayRaceRacers": 0,
    "image": "https://s30.postimg.org/st5b28fxt/polarbear.png",
    "website": "http://www.shalehilladventure.com/feb-4th-2017---polar-bear-challenge.html",
    "active": true,
    "show": false,
    "hide":true
},{

    "ID": "3A",
    "title": "Endurance Society / Snowshoe Festival",
    "location": "43°53'26.5\"N 73°00'32.9\"W",
    "address": "Blueberry Hill Inn and Ski Center, 1245 Goshen Ripton Road. Goshen, VT 05733",
    "milesPerLap": 0,
    "date": "Saturday, February 25, 2017",
    "hasCompetativeLap": false,
    "isNonOCREvent": true,
    "nonOCREvents":  [{
        "name":"Snowshoe 10k",
        "miles": "10k",
        "ran": false
    }, {
        "name":"Snowshoe 30k",
        "miles": "30k",
        "ran" : false
    },{
        "name":"Snowshoe 60k",
        "miles": "60k",
        "ran" : false
    },{
        "name":"Sledrun 5k",
        "miles": "5k",
        "ran" : false
    }],
    "isMultiLapEvent": false,
    "isRelayRace":false,
    "RelayRaceRacers": 0,
    "image": "https://s27.postimg.org/7qw5epyo3/endurancesociety.png",
    "website": "http://www.endurancesociety.org/snowshoe-festival.html",
    "active": false,
    "show": false,
    "hide":true

}];


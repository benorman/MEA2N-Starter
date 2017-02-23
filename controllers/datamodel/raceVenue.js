const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*

 TODO: WARNING >>>>>>  make sure this schema matches /public/src/app/model/races.model.ts!!!!

 Make sure the post body has Json selected as the type when using Postman to Test!~

 */


const RACEVENUESCHEMA = new Schema({

    ID: String,
    title: String,
    location: String,
    address: String,
    milesPerLap: Number,
    date: String,
    eventType: String,
    hasCompetativeLap: Boolean,
    isNonOCREvent: Boolean,
    nonOCREvents: [{name: String, miles: String, ran: Boolean}],
    isMultiLapEvent: Boolean,
    isRelayRace: Boolean,
    RelayRaceRacers: Number,
    image: String,
    website: String,
    active: Boolean,
    show: Boolean,
    hide: Boolean,

});


module.exports = mongoose.model('races2017', RACEVENUESCHEMA)






const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*

TODO: WARNING >>>>>>  make sure this schema matches /public/src/app/model/spahtens.model.ts!!!!

*/


const SPAHTENPROFILESCHEMA = new Schema({

    name:String,
    email:String,
    streetAddress:String,
    city:String,
    state:String,
    zip:String,
    racesCompleted:[{id:String, laps:Number, competitiveLap:Boolean, racePoints:Number}],
    racesRun:Number,
    totalPoints:Number,
    image:String

});


module.exports = mongoose.model('SpahtenProfileSchema', SPAHTENPROFILESCHEMA)






const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*

TODO: WARNING >>>>>>  make sure this schema matches /public/src/app/model/spahtens.model.ts!!!!

Make sure the post body has Json selected as the type when using Postman to Test!~

*/


const SPAHTENPROFILESCHEMA = new Schema({
    
    id:String,
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



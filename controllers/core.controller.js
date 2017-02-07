/*

 //delete a spahten profile
 coreRoutes.delete('/spahten/:id',coreController.deleteSpahten)

 //update a spahten profile
 coreRoutes.put('/spahten/:id',coreController.updateSpahten)

 // get a spahten profile
 coreRoutes.get('/spahten/:id', coreController.getSpahten)

 coreRoutes.get('/findspahten/:id', coreController.findSpahten)

 // validate professor's email address when he/she is registering
 coreRoutes.post('/spahten', coreController.createSpahten)

 */

exports.deleteSpahten = deleteSpahten;
exports.updateSpahten = updateSpahten;
exports.getSpahten = getSpahten;
exports.createSpahten = createSpahten;
exports.findSpahten = findSpahten;

const SpahtenProfile = require('./datamodel/spahtenProfile');

function deleteSpahten(req, res) {

}

function updateSpahten(req, res) {

}

function getSpahten(req, res) {

    res.send("Testing")
}

function findSpahten(req, res) {


}

/*
 Spahten profile Schema

 name:String,
 email:String,
 streetAddress:String,
 city:String,
 state:String,
 zip:Number,
 racesCompleted:[{id:string, laps:number, competitiveLap:boolean, racePoints:number}],
 racesRun:Number,
 totalPoints:Number,
 image:String
 */


function createSpahten(req, res) {

    const name = req.body.name;
    const email = req.body.email;
    const streetAddress = req.body.streetAddress;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const racesCompleted = req.body.racesCompleted;
    const racesRun = req.body.racesRun;
    const totalPoints = req.body.totalPoints;
    const image = req.body.image;

    console.log(req.body);

     if (!email) {
     return res.status(422).send({error: 'You must provide an email for the profile.' + req})
     }
     if(!req){
         return res.status(422).send({error: 'You must provide an email for the profile.'})
     }



    SpahtenProfile.findOne({email: email}, function (err, existingSpahtenProfile) {

        if (err) {
            return res.status(501).json(err)
        }

        // if user is not unique, return error
        if (existingSpahtenProfile) {
            return res.status(422).send({error: 'The Spahten Profile already exists.'})
        }


        const spahtenProfile = new SpahtenProfile()

        spahtenProfile.name = name;
        spahtenProfile.email = email;
        spahtenProfile.streetAddress = streetAddress;
        spahtenProfile.city = city;
        spahtenProfile.state = state;
        spahtenProfile.zip = zip;
        spahtenProfile.racesCompleted = racesCompleted;
        spahtenProfile.racesRun = racesRun;
        spahtenProfile.totalPoints = totalPoints;
        spahtenProfile.image = image;


        spahtenProfile.save(function (err, createSpahtenProfile) {
            if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).json(createSpahtenProfile);
        })
    })

}




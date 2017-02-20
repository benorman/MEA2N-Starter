/*

 //delete a spahten profile
 coreRoutes.delete('/spahten/:id',coreController.deleteSpahten)

 //update a spahten profile
 coreRoutes.put('/spahten/:id',coreController.updateSpahten)

 // get a spahten profile
 coreRoutes.get('/spahten/:id', coreController.getSpahten)

 coreRoutes.get('/findspahten', coreController.findSpahten)

 // validate professor's email address when he/she is registering
 coreRoutes.post('/spahten', coreController.createSpahten)

 */

exports.deleteSpahten = deleteSpahten;
exports.updateSpahten = updateSpahten;
exports.getSpahten = getSpahten;
exports.createSpahten = createSpahten;
exports.findSpahten = findSpahten;

const SpahtenProfile = require('./datamodel/spahtenProfile');

spahtenProfile = new SpahtenProfile();

function deleteSpahten(req, res) {

}

/*

 fields that can be updated in the database:

 name,
 streetAddress,
 zip




 */


function updateSpahten(req, res) {

    /*

     const name = req.body.name?req.body.name:"";
     const email = req.params.id;
     const streetAddress = req.body.streetAddress?req.body.streetAddress:"";
     const zip = req.body.zip?req.body.zip:"";


     spahtenProfile.findById(email,function(err,moocReg){
     if(err){
     return res.status(500).json(err)
     }
     if (description) {
     moocReg.description = description
     }
     if (code) {
     moocReg.code = code
     }
     if (name) {
     moocReg.name = name
     }
     if (resourcesURL) {
     moocReg.ResourcesURL = resourcesURL
     }
     moocReg.save(function(err,updatedMoocReg){
     if(err){
     if(err.errmsg.indexOf('duplicate key') && err.errmsg.indexOf('code')){
     return res.status(422).json({error:"Code already in use. Please use a different code"})
     }
     else{
     return res.status(500).json(err)
     }
     }
     return res.status(200).json(updatedMoocReg)
     })
     })
     }
     */


}

function getSpahten(req, res) {

    res.send("Testing")
}

/*
* This route tries to find a spahten profile by ID first, if there is no id, it looks
* using an email and returns the profile found. If no profile is found it returns a 404.
*
*
* */




function findSpahten(req, res) {


    const email = req.body.email;
    const id = req.body.id;
    const name = req.body.name;

    if (id && id.length > 0) {
        SpahtenProfile.findOne({_id: id}, function (err, existingSpahtenProfile) {

            if (err) {
                return res.status(501).json(err)
            }

            if (existingSpahtenProfile) {
                return res.status(200).send({
                    info: 'The Spahten Profile w/ ID exists!',
                    profile: existingSpahtenProfile
                })
            }
        })


    } else{

        SpahtenProfile.findOne({email: email}, function (err, existingSpahtenProfile) {

            if (err) {
                return res.status(501).json(err)
            }

            if (existingSpahtenProfile) {
                return res.status(200).send({
                    info: 'The Spahten Profile w/Email exists!',
                    profile: existingSpahtenProfile
                })
            } else {
                return res.status(404).send({error: 'The Spahten Profile does not exist!'})
            }

        });
    } 


};


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


 This function assumes that we have already tried to findSpahten() method call.

 If you test this function in postman you might create duplicate

 */


function createSpahten(req, res) {

    console.log("CREATING A SPAHTEN PROFILE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    spahtenProfile = new SpahtenProfile();

    spahtenProfile.name = req.body.name;
    spahtenProfile.email = req.body.email;
    spahtenProfile.streetAddress = req.body.streetAddress;
    spahtenProfile.city = req.body.city;
    spahtenProfile.state = req.body.state;
    spahtenProfile.zip = req.body.zip;
    spahtenProfile.racesCompleted = req.body.racesCompleted;
    spahtenProfile.racesRun = req.body.racesRun;
    spahtenProfile.totalPoints = req.body.totalPoints;
    spahtenProfile.image = req.body.image;
    spahtenProfile.id = req.body.id;

    console.log("ID is > " + spahtenProfile.id);
    console.log("Email is > " + spahtenProfile.email);

    if (spahtenProfile.id.length>0 && spahtenProfile.email.length>0){
        return res.status(422).send({error: 'This profile contains an id and email, it must exist!' + req})
    }

    if (!spahtenProfile.email) {
        return res.status(422).send({error: 'You must provide an email for the profile.' + req})
    }
    if (!req) {
        return res.status(422).send({error: 'You must provide an email for the profile.'})
    }

 

    spahtenProfile.save( spahtenProfile, function (err, createSpahtenProfile) {

            if (err) {
                return res.status(500).json(err)
            }
            //grab the ID returned by mongo and set the ID on the spahtenProfile Object

            if (!spahtenProfile.id.length > 0) {
                spahtenProfile.id = createSpahtenProfile._id;
            }

            console.log(spahtenProfile);
            //return the spahtenProfile object
            //TODO: set this object as a local storage cookie
            return res.status(200).send({
                info: 'The Spahten Profile was created',
                profile: spahtenProfile
            })
        })
   


}






exports.getRaceVenues = getRaceVenues;
exports.getRaceVenueDetails = getRaceVenueDetails;
exports.getRaceVenueTitles = getRaceVenueTitles;

const RaceVenues = require('./datamodel/raceVenue');

raceVenues = new RaceVenues();

function getRaceVenueTitles(req, res) {

    RaceVenues.find({},'ID title eventType image show',function (err, raceVenuesReturned) {

        if (err) {
            console.log("Error reading race venues " + err)
        }

        if (raceVenuesReturned) {

            var raceVenuesArray = [];

            return res.status(200).send({
                info: 'Here are the race venue titles for 2017',
                raceVenues2017: raceVenuesReturned
            })

        }

    })

}


function getRaceVenues(req, res) {

    RaceVenues.find({},function (err, raceVenuesReturned) {

        if (err) {
            console.log("Error reading race venues " + err)
        }

        if (raceVenuesReturned) {
            return res.status(200).send({
                info: 'Here are the race venues for 2017',
                raceVenues2017: raceVenuesReturned
            })

        }

    })

}


function getRaceVenueDetails(req, res) {
    
    var ID = req.params.ID;
    console.log("ID is " + ID);

    

    RaceVenues.findOne({ID: ID}, function (err, raceVenuesReturned) {

        if (err) {
            console.log("Error reading race venue information " + err)
        }

        if (raceVenuesReturned) {
            return res.status(200).send({
                info: 'Here are the race venue information',
                raceVenues2017: raceVenuesReturned
            })

        }

    })

}


exports.getRaceVenues = getRaceVenues;
exports.getRaceVenueInfo = getRaceVenueInfo;

const RaceVenues = require('./datamodel/raceVenue');

raceVenues = new RaceVenues();

function getRaceVenues(req, res) {

    RaceVenues.find({},'ID title eventType',function (err, raceVenuesReturned) {

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

function getRaceVenueInfo(req, res) {
    
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
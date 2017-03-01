var path = require('path');

const coreController = require('../controllers/core.controller.js');
const raceController = require('../controllers/race.controller');

const express = require('express')

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');



/* Middleware to require login/auth
const requireAuth  = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })
*/

// Content for roles
const REQUIRE_ADMIN   = 'Admin' 

module.exports = function (app) {
    // initialize route groups
    const apiRoutes  = express.Router();
    const coreRoutes = express.Router();
    const raceRoutes = express.Router();


    const jwtCheck = jwt({
        // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
        secret: jwksRsa.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: "https://bnorman.auth0.com/.well-known/jwks.json"
        }),

        // Validate the audience and the issuer.
        audience: 'Ee0ZLEQBzzLyWHzffsAbKr2ggc9d8wa7',
        issuer: "https://bnorman.auth0.com/",
        algorithms: ['RS256']
    });

   /* const checkPermissions = function(req, res, next){

        console.log(req);
        console.log("Checking Permissions");
        switch(req.path){
            case '/api/core/findspahten':{
                console.log("Trying the FindSpahten Path");
               // next();
                var role = ['user'];
                try {
                    for (var i = 0; i < role.length; i++) {
                        if (req.user.role.includes(role[i])) {
                            next();
                        } else {
                            res.status(403).send({message: 'Forbidden User'});
                        }
                    }
                    break;
                }catch(error){
                    console.log(error);
                }

            }
        }
    }
    */

// enable the use of the jwtCheck middleware - code omitted

//enable the use of the checkPermissions middleware
    //app.use(checkPermissions);


    // Set auth routes as subgroup/middleware to apiRoutes

    apiRoutes.use('/core',coreRoutes);
    apiRoutes.use('/race',raceRoutes);

    //delete a spahten profile 
    coreRoutes.delete('/spahten/:id', coreController.deleteSpahten);

    //update a spahten profile
    coreRoutes.put('/spahten/:id',coreController.updateSpahten);

    // get a spahten profile
    coreRoutes.get('/spahten/:id', coreController.getSpahten);

    //find a spahten profile
    //localhost:3000/api/core/spahten/findspahten
    coreRoutes.post('/findspahten', jwtCheck, coreController.findSpahten);

    
    
    //create a spahten profile in the database
    coreRoutes.post('/spahten', jwtCheck, coreController.createSpahten);

    //get race venues
    raceRoutes.get('/racevenues', raceController.getRaceVenues);

    //get race venue titles
    raceRoutes.get('/racevenuetitles', raceController.getRaceVenueTitles);

    //get a race venue's information
    raceRoutes.get('/racevenuedetails/:ID', raceController.getRaceVenueDetails);

    app.get('/', function(req, res){
        console.log("Sending Index File");

        try {
            //res.sendFile('../public/dist/index.html');

           res.sendFile('index.html', {root: path.join(__dirname, '../public/dist') });
        }catch(error){
            console.log(error);
        }
    });


    // set URL for API group routes
    app.use('/api', apiRoutes);
    /*app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send('You need to login to access this page')
        }
    });*/

}


var path = require('path');

const coreController = require('../controllers/core.controller.js')

const express = require('express')



/* Middleware to require login/auth
const requireAuth  = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })
*/

// Content for roles
const REQUIRE_ADMIN   = 'Admin' 

module.exports = function (app) {
    // initialize route groups
    const apiRoutes  = express.Router()
    const coreRoutes = express.Router()

    // Set auth routes as subgroup/middleware to apiRoutes

    apiRoutes.use('/core',coreRoutes)

    //delete a spahten profile 
    coreRoutes.delete('/spahten/:id',coreController.deleteSpahten)

    //update a spahten profile
    coreRoutes.put('/spahten/:id',coreController.updateSpahten)

    // get a spahten profile
    coreRoutes.get('/spahten/:id', coreController.getSpahten)

    //find a spahten profile
    //localhost:3000/api/core/spahten/findspahten
    coreRoutes.post('/findspahten', coreController.findSpahten)
    
    //create a spahten profile in the database
    coreRoutes.post('/spahten', coreController.createSpahten)

    app.get('/', function(req, res){
        console.log("Sending Index File")
        try {
           // res.sendFile('index.html', {root: __dirname + "/client"});
        }catch(error){
            console.log(error);
        }
    });


    // set URL for API group routes
    app.use('/api', apiRoutes)
    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send('You need to login to access this page')
        }
    });

}


const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const logger     = require('morgan')
const router     = require('./routes/routing')
const mongoose   = require('mongoose')
const config     = require('./config/config')
//const User = require( './models/user')

const path = require('path');


// start the server
const server = app.listen(config.port)
console.log('Your server is running on port ' + config.port + '...')


// setup static file location for production
//app.use('/',express.static('./public/dist'));

// setting up basic middleware for all Express requests
app.use(logger('dev'))//log request to use API using morgan
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", {root: path.join(__dirname, '/public/dist')  });
}

app.use(redirectRouterLessonUnmatched);
app.use(express.static(__dirname + '/public/dist'));
console.log("Directory is " + __dirname + '/public/dist');

//const socketEvents = require('./socketEvents')
mongoose.connect(config.database,function(err){


       console.log("Connecting to the Database" );


    if(err){

        console.log("Failed to connect to mongo db "+err);
        //  app.render('Internal Server Error')

    }
    // Populate databases with admin users data
   // if (config.seedDB) {
   //     require('./config/seed')
   // }
})

// enable CORS from the client side
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
    next()
});




// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers
// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
//}

// production error handler
// no stacktraces leaked to user
/*
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});
*/

router(app)

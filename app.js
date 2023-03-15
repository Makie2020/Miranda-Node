var express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config()
var users = require('./user/user')

const routes = require('./routes/login');

const { API_PORT } = process.env;
const { SECRET_KEY } = process.env;
const port = process.env.PORT || API_PORT;
const listEndpoints = require('express-list-endpoints')

var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = SECRET_KEY;

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  var user = users.filter( user => user.id == jwt_payload.id)[0];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

var app = express();
app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())


// TEST SECURE ROUTE
app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
    res.json({
      message: 'You made it to the secure route',
      user: req.body.name
    })
});

//ROUTERS

//LOGIN
app.use('/', routes);

const routerBookings = require('./routers/bookings');
app.use('/bookings', passport.authenticate('jwt', { session: false }), routerBookings);

const routerRooms = require('./routers/rooms');
app.use('/rooms', passport.authenticate('jwt', { session: false }), routerRooms);

const routersUsers = require('./routers/users');
app.use('/users', passport.authenticate('jwt', { session: false }), routersUsers);

const routerContact = require('./routers/contact');
app.use('/contact', passport.authenticate('jwt', { session: false }), routerContact);


const list = (listEndpoints(app));
console.log(list)
app.get("/", function(req, res) {
  res.json({message: list});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
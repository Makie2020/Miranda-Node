var express = require("express");
var dotenv = require ('dotenv');
dotenv.config()
var passport = require("passport");
const listEndpoints = require('express-list-endpoints')

require('./auth/auth');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//LOGIN
const routerLogin = require('./routers/login');
app.use('/login', routerLogin);

const routerBookings = require('./routers/bookings');
app.use('/bookings', passport.authenticate('jwt', { session: false }), routerBookings);

const routerRooms = require('./routers/rooms');
app.use('/rooms', passport.authenticate('jwt', { session: false }), routerRooms);

const routersUsers = require('./routers/users');
app.use('/users', passport.authenticate('jwt', { session: false }), routersUsers);

const routerContact = require('./routers/contact');
app.use('/contact', passport.authenticate('jwt', { session: false }), routerContact);


const list = (listEndpoints(app));
app.get("/", function(req, res) {
  res.json({message: list});
});

// catch 404 and forward to error handler
app.use(function(next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err.message);
});


module.exports = app;
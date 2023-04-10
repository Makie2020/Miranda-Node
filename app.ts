var express = require("express");
import { Response } from "express";
var cors = require('cors')
var dotenv = require ('dotenv');
dotenv.config()
var passport = require("passport");
const listEndpoints = require('express-list-endpoints');
var createError = require('http-errors');  
require('./auth/auth');
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//LOGIN
const loginRouter = require('./routers/login');
app.use('/login', loginRouter);

const bookingsRouter = require('./routers/bookings');
app.use('/bookings', passport.authenticate('jwt', { session: false }), bookingsRouter);

const roomsRouter = require('./routers/rooms');
app.use('/rooms', passport.authenticate('jwt', { session: false }), roomsRouter);

const usersRouter = require('./routers/users');
app.use('/users', passport.authenticate('jwt', { session: false }), usersRouter);

const contactRouter = require('./routers/contact');
app.use('/contact', passport.authenticate('jwt', { session: false }), contactRouter);


const list = (listEndpoints(app));
app.get("/", function(res:Response) {
  res.json({message: list});
});

// catch 404 and forward to error handler
app.use(function(next:Function) {
  next(createError(404));
});

// error handler
app.use(function(err:Error, res:Response) {
  res.json(err.message);
});

app.listen(process.env.API_PORT, function() {
  console.log(`Server running on port ${process.env.API_PORT}`);
});

module.exports = app;
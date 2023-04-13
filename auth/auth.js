const passport = require("passport");
const localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

require ('dotenv');

const users = {
    name: 'Marieke',
    password: 'test',
};

passport.use('login', 
    new localStrategy({
        usernameField: 'name',
        passwordField: 'password'
    }, (name, password, done) => {
        try{
            if (users.name === name && users.password === password) {
                return done(null, users, {message: "Login successful"})
            }
        } catch(error) {
            return done(error);
        }
    })
);

passport.use(
    new JwtStrategy({
        secretOrKey: process.env.SECRET_KEY || 'TOP_SECRET',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, (token, done) => {
        try{
         return done(null, token.user)
        } catch(error) {
          done(error);
        }
    })
);
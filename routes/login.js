const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

var users = require('../user/user')

var jwtOptions = {}
jwtOptions.secretOrKey = SECRET_KEY;

router.post(
  "/login", 
    function(req, res) {
      if(req.body.name && req.body.password){
        var name = req.body.name;
      }
      var user = users.filter( user => user.name == name)[0];
      if( ! user ){
        res.status(401).json({message:"no such user found"});
      }
      if(user.password === req.body.password) {
        var payload = {id: user.id};
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({message: "ok", token: token});
      } else {
        res.status(401).json({message:"passwords did not match"});
      }
    }
);

module.exports = router;
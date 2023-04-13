var passport = require("passport");
var jwt = require('jsonwebtoken');
require ('dotenv');

const secretToken = process.env.SECRET_KEY;

const loginController = (req, res, next) => {
  passport.authenticate('login', 
    async (err, user, info) => {
      try{
        if (err) {
          throw new Error(err);
        }
        if (!user) {
          throw new Error(info.message);
        }
        req.login(
          user,
          {session: false},
          async (err) => {
            if (err) throw new Error(err);
            const body = { name: user.name };
            const token = jwt.sign({ user: body }, secretToken);
            return res.json(token);
          }
        );
      } catch(err) {
          return next(err)
      }
    }) (req, res, next)
}
module.exports = loginController;
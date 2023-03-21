var express = require("express");
var  loginController = require("../controllers/loginController")
const routerLogin = express.Router();
routerLogin.use(express.json());

routerLogin.post('/', loginController);

module.exports =  routerLogin;
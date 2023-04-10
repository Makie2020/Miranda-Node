var express = require('express');
const routerUsers = express.Router();
routerUsers.use(express.json());

const {
  usersList,
  create_user,
} = require('../controllers/userController')

//GET USER DATA
routerUsers.get('/', usersList);

//CREATE NEW USER
routerUsers.post('/', create_user);

module.exports = routerUsers;

var express = require('express');
var routerContacts = express.Router();
routerContacts.use(express.json());

const  {contact_list} = require('../controllers/contactController')

// CONTACT DATA
routerContacts.get('/', contact_list);

module.exports = routerContacts;

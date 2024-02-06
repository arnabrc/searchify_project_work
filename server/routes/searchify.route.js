const express = require('express');
const searchifyRoute = express.Router();

// Searchify controllers
const searchify_controller = require('./../controllers/searchify.controller');

//Get All Searchify API
searchifyRoute.post('/getAll', searchify_controller.searchify_details);

//Get Single Searchify API
searchifyRoute.post('/getByTitle', searchify_controller.searchify_detail);

module.exports = searchifyRoute;

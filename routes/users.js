/* File Name: users.js
Student Name: CHI SING LEUNG
Student ID: 301268517
Date: 30 Sep 2022
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;

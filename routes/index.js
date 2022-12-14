/* File Name: index.js
Student Name: CHI SING LEUNG
Student ID: 301268517
Date: 30 Sep 2022
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',
    });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',
    });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me',
    });
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
    });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',
    });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
    });
});

router.post('/contact-form', function(req, res, next) {
  console.log(req.body.lname);
  console.log(req.body.fname);
  console.log(req.body.message);
  res.redirect('/');
});

module.exports = router;

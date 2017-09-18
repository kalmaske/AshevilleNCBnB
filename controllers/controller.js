var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
  res.redirect("/asheville");
});

router.get("/asheville", function (req, res) {
  db.listings.findAll({}).then(function (data) {
    var hbsObject = {
      listings: data
    };

    console.log(hbsObject);

    res.render("index", hbsObject);
  });
});

router.get("/home", function (req, res) {
  console.log(req.user);
  db.listings.findAll({}).then(function (data) {
    var hbsObject = {
      user: req.user,
      listings: data,
    };
    console.log(hbsObject);
    res.render("home", hbsObject);
  });
});

router.post("/home", function (req, res) {
  var listing = {
    neighbourhood: req.body.neighbourhood,
    name: req.body.name,      
    room_type: req.body.room_type,
    price: req.body.price,
    minimum_nights: req.body.minimum_nights,
    availability_365: req.body.availability_365
  };

  console.log(listing);

  db.listings
    .create(listing)
    .then(function () {
      res.redirect("/home");
    })
    .catch(function (err) {
      console.error(err);
    });
});


// ===================================
// new search get
router.put("/search", function (req, res) {
  db.asheville_data.findAll({}).then(function (data) {
    var hbsObject = {
      asheville_data: data
    };
    console.log(hbsObject);
    res.render("search", hbsObject);
  });
});

router.get("/search", function (req, res) {
  db.listings.findAll({}).then(function (data) {
    var hbsObject = {
      listings: data
    };
    console.log(hbsObject);
    res.render("search", hbsObject);
  });
});

router.post("/search", function (req, res) {
  var listing = {    
    host_name: req.body.host_name,
    name: req.body.name,
    neighbourhood: req.body.neighbourhood,
    price: req.body.price,
    room_type: req.body.room_type,
    minimum_nights: req.body.minimum_nights,
    availability_365: req.body.availability_365
  };


  db.asheville_data
    .create(listing)
    .then(function () {
      res.redirect("/search");
    })
    .catch(function (err) {
      console.error(err);
    });
});


module.exports = router;
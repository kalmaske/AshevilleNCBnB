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

// router.get("/home/blog", function(req, res) {
//   db.ashevilles.findAll({}).then(function(data) {
//     var hbsObject = {
//       ashevilles: data
//     };

//     console.log(hbsObject);

//     res.render("listing", hbsObject);
//   });
// });

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

// router.get("/home", function (req, res) {
//   db.listings.findAll({}).then(function (data) {
//     var hbsObject = {
//       neighbourhood: req.params.neighbourhood,
//       name: req.params.name,      
//       room_type: req.params.room_type,
//       price: req.params.price,
//       minimum_nights: req.params.minimum_nights,
//       availability_365: req.params.availability_365
//     };

//     console.log(hbsObject);

//     res.render("home", hbsObject);
//   });
// });

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


module.exports = router;



// // Root get route
// app.get("/", function (req, res) {
//   connection.query("SELECT * FROM listings;", function (err, data) {
//     if (err) throw err;

//     // Test it
//     // console.log('The solution is: ', data);

//     // Test it
//     // res.send(data);

//     res.render("index", {
//       listings: data
//     });
//   });
// });

// // Post route -> back to home
// app.post("/", function (req, res) {
//   // Test it
//   // console.log('You sent, ' + req.body.task);

//   // Test it
//   // res.send('You sent, ' + req.body.task);

//   connection.query("INSERT INTO listings (name,neighbourhood, price, room_type, minimum_nights, availability_365 ) VALUES (?)", [req.body.name, req.params.neighbourhood, req.params.price,
//     req.body.room_type, req.params.minimum_nights, req.params.availability_365
//   ], function (err, result) {
//     if (err) throw err;

//     res.redirect("/");
//   });
// });
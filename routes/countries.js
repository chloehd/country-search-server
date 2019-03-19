const express = require('express');
const router = express.Router();
const Countries = require("../models/country-model.js");


/* GET country name */
router.get("/", (req, res, next) => {

  Countries.find((err) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(Countries);
    }
  })
})

/* GET country location */
router.get("/near", (req, res, next) => {
  let { lat = 48.8543, lng = 2.3527 } = req.query;

  // axios request structure as follow
  //  http://localhost:5000/api/countries/near?latitude=48.854&longitude=2.3527
  //  2.3527 (Paris)
  // using mongoDB near

  Countries.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lat, lng]
        }
      }
    }
  })
    .then(result => res.json(result))
    .catch(error => {
      if (error) console.log(error);
    });
});


/* GET current location by IP*/
router.get("/currentlocation", (req, res, next) => {
  axios.get("https://api.ipstack.com/check?access_key=a1d5abe0fd6709ed6ee80744cc29def2")
  .then()
  .catch(err => console.log("error", err))
});

module.exports = router;
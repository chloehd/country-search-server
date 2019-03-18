const express = require('express');
const axios = require("axios");
const router = express.Router();
const Countries = require("../bin/countries_metadata.json");

/* GET current location by IP*/
// axios.get("https://api.ipstack.com/check?access_key=a1d5abe0fd6709ed6ee80744cc29def2")
//   .then()
//   .catch(err => console.log("error", err))


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET country name */
router.get("/countries", (req, res, next) => {
  //let { lat = 48.864716, lng = 2.349014 } = req.query;

  Countries.find((err, findCountries) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(findCountries);
    }
  })
})

/* GET country location */
router.get("/countries/location", (req, res, next) => {
  let { lat = 48.864716, lng = 2.349014 } = req.query;

  Countries.find((err, findCountries) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(findCountries);
    }
  })
})



// router.get("/currentlocation", (req, res, next) => {
//   axios.get("https://api.ipstack.com/check?access_key=a1d5abe0fd6709ed6ee80744cc29def2")
//   .then(res )
//   .catch(err => console.log("error", err))
// })



module.exports = router;

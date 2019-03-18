const express = require('express');
const router = express.Router();
const Countries = require("../bin/countries_metadata.json");



/* GET country name */
router.get("/", (req, res, next) => {
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
router.get("/location", (req, res, next) => {
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


/* GET current location by IP*/
// axios.get("https://api.ipstack.com/check?access_key=a1d5abe0fd6709ed6ee80744cc29def2")
//   .then()
//   .catch(err => console.log("error", err))


// router.get("/currentlocation", (req, res, next) => {
//   axios.get("https://api.ipstack.com/check?access_key=a1d5abe0fd6709ed6ee80744cc29def2")
//   .then(res )
//   .catch(err => console.log("error", err))
// })

module.exports = router;
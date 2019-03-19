// seed countries
const mongoose = require("mongoose");
const Countries = require("../models/country-model.js");
const jsonData = require("./countries_metadata.json");
const dotenv = require("dotenv");
dotenv.config();

// connect with the database
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// monkey patch object structure to fit mongodb geojson sort functionality
jsonData.forEach(element => {
  Countries.create(
    {
      name: element.name,
      lat: element.lat,
      lng: element.lng,
      location: {
        type: "Point",
        coordinates: [element.lat, element.lng]
      },
    },
    function(e) {
      if (e) {
        console.log(
          `There is an error somewhere.. Failed to add${
            jsonData.length
          } countries`,
          e
        );
        throw e;
      } else {
        console.log(`${element.name} was added to the DB`);
      }
    }
  );
});
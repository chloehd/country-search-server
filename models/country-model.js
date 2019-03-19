const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const countriesSchema = new Schema(
  {
    name: { type: String },
    lat: { type: Number },
    lng: { type: Number },
    location: {
      type: { type: String },
      coordinates: [Number]
    },

  },

  { timestamps: true }
);

countriesSchema.index({ location: "2dsphere" });
const Countries = mongoose.model("Countries", countriesSchema);

module.exports = Countries;

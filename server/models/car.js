const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  carName: String,
  lastFillUp: Number,
  lastFillUpTime: String,
  lastLocation: String,
  fuelLeft: Number,
  travelSince: Number,
  diagnosticIssue: String,
  diagnosticDetail: String,
  businessRatio: Number,
  businessTotal: Number,
  averageSpeed: Number,
  travelDistanceTotal: Number,
  travelDistanceThisYear: Number,
  timeInCar: Number,
  emissions: Number,
  fuelEconomy: Number,
  parking: String,
  timeTraveld: String,
  startLocation: String,
  endLocation: String
});

module.exports = mongoose.model("Car", carSchema);

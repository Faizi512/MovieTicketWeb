//const Joi = require("joi");
const mongoose = require("mongoose");

const Cinema = mongoose.model(
  "Cinema",
  new mongoose.Schema({
    Name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    Address: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    Email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    Phone: {
      type: Number,
      required: true,
      minlength: 5,
      maxlength: 13
    },
    Location: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500
    },
    Facilities: {
      type: Array,
      required: true
    },
    Picture: {
      type: String,
      required: true
    }
  })
);

exports.Cinema = Cinema;

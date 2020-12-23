// const Joi = require("joi");
const mongoose = require("mongoose");
const BaseJoi = require("joi");
const ImageExtension = require("joi-image-extension");

const Joi = BaseJoi.extend(ImageExtension);

const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    Name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    Director: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    Genres: {
      type: Array,
      required: true
    },
    Release: {
      type: Date,
      required: true
    },
    PlayTime: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500
    },
    Cast: {
      type: Array,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    Rating: {
      type: Number
    },
    Picture: {
      data: Buffer,
      contentType: String
    }
  })
);

function validateMovie(movie) {
  const schema = {
    Name: Joi.string()
      .required()
      .min95(5)
      .max(50),
    Director: Joi.string()
      .required()
      .min95(5)
      .max(50),
    Genres: Joi.array(Joi.string()).required(),
    Release: Joi.date().required(),
    PlayTime: Joi.string().required(),
    Cast: Joi.array(Joi.string()).require(),
    Description: Joi.string().required(),
    Picture: Joi.image()
  };
  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;

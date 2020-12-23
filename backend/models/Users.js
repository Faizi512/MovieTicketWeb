//const Joi = require("joi");
const mongoose = require("mongoose");

const Users = mongoose.model(
  "Users",
  new mongoose.Schema({
    FirstName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    LastName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    Email: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50
    },
    Password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 50
    },
    Phone: {
      type: Number,
      required: true,
      minlength: 13,
      maxlength: 15
    }
  })
);
function validateUser(user) {
  const schema = {
    FirstName: Joi.string()
      .required()
      .minlength(4)
      .maxlength(50),
    LastName: Joi.string()
      .required()
      .minlength(4)
      .maxlength(50),
    Email: Joi.string()
      .email()
      .required(),
    Password: Joi.string()
      .required()
      .minlength(8)
      .maxlength(50),
    Phone: Joi.Number()
      .required()
      .minlength(13)
      .maxlength(15)
  };
  return Joi.validate(user, schema);
}
exports.Users = Users;
exports.validate = validateUser;

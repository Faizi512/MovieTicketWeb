//const Joi = require("joi");
const mongoose = require("mongoose");

const Ticket = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    CustName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    CustEmail: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    Slot: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500
    },
    MovieName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500
    },
    Date: {
      type: Date,
      required: true
    },
    Price: {
      type: Number,
      required: true
    },
    Quantity: {
      type: Number,
      required: true
    }
  })
);
function validateTicket(ticket) {
  const schema = {
    CustName: Joi.string().required(),
    CustEmail: Joi.string()
      .email()
      .required(),
    Slots: Joi.string().required(),
    MovieName: Joi.string().required(),
    Date: Joi.Date().required(),
    Price: Joi.Number().required(),
    Quantity: Joi.Number().required()
  };

  return Joi.validate(ticket, schema);
}
exports.Ticket = Ticket;
exports.validate = validateTicket;

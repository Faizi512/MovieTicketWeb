//const Joi = require("joi");
const mongoose = require("mongoose");

const Schedual = mongoose.model(
  "Schedual",
  new mongoose.Schema({
    Date: {
      type: Date,
      required: true
    },
    Slots: {
      type: Array,
      required: true
    }
  })
);
function validateSchedual(schedual) {
  const schema = {
    Date: Joi.date().required(),
    Slots: Joi.array(Joi.string()).required()
  };
  return Joi.validate(schedual, schema);
}
exports.Schedual = Schedual;
exports.validate = validateSchedual;

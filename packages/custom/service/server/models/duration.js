'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Duration Schema
 */
var DurationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  nb_months: {
    type: Number
  }
});

/**
 * Validations
 */
DurationSchema.path('name').validate(function(name) {
  return !!name;
}, 'Type cannot be blank');

/**
 * Statics
 */
DurationSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('Duration', DurationSchema);

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * ServiceType Schema
 */
var ServiceTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  technologies:[]
});

/**
 * Validations
 */
ServiceTypeSchema.path('name').validate(function(name) {
  return !!name;
}, 'Type cannot be blank');

/**
 * Statics
 */
ServiceTypeSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('ServiceType', ServiceTypeSchema);

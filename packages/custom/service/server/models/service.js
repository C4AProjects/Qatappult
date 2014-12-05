'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Service Schema
 */
var ServiceSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  technology: {
    type: String,
    required: true,
    trim: true
  },
  scope: {
    type: String,
    required: true,
    trim: true
  },
  averageCost: {
    type: Number,
    required: true,
    trim: true
  },
  hourlyRate: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  staff: { //staff Capacity
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Validations
 */
ServiceSchema.path('type').validate(function(type) {
  return !!type;
}, 'Type cannot be blank');

/**
 * Statics
 */
ServiceSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Service', ServiceSchema);

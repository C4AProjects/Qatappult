'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Feature Schema
 */
var FeatureSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  completion: { // completion in hours
    type: Number,
    required: true
  },
  costPerHour: {
    type: Number
  },
  totalCost: {
    type: Number,
    required: true,
    trim: true
  },
  staffCapacity: {
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
FeatureSchema.path('type').validate(function(type) {
  return !!type;
}, 'Type cannot be blank');

/**
 * Statics
 */
FeatureSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Feature', FeatureSchema);

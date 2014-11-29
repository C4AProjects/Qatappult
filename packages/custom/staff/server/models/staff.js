'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Staff Schema
 */
var StaffSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  rate: {
        min: Number,
        med: Number,
        max: Number
  },
  description: {
    type: String,
    trim: true
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
StaffSchema.path('type').validate(function(type) {
  return !!type;
}, 'Type cannot be blank');

/**
 * Statics
 */
StaffSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Staff', StaffSchema);

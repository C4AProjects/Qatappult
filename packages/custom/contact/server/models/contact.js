'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Contact Schema
 */
var ContactSchema = new Schema({  
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  middlename: {
    type: String,
    trim: true
  },
  job: {
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
  },
  status: {
    type: String,
    trim: true
  }
});

/**
 * Validations
 */
ContactSchema.path('firstname').validate(function(firstname) {
  return !!firstname;
}, 'Firstname cannot be blank');

ContactSchema.path('lastname').validate(function(lastname) {
  return !!lastname;
}, 'Lastname cannot be blank');

/**
 * Statics
 */
ContactSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name').exec(cb);
};

mongoose.model('Contact', ContactSchema);

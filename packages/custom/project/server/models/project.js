'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Project Schema
 */
var ProjectSchema = new Schema({
  type: { //mobile, Web, Design
    type: String,
    required: true,
    trim: true
  },
  scope: { //Small, Medium, Large, Enterprise
    type: String,
    required: true,
    trim: true
  },
  completion: {
    type: Number,
    required: true
  },
  staffCapacity: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },  
  company: {
    type: Schema.ObjectId,
    ref: 'Company'
  }
});

/**
 * Validations
 */
ProjectSchema.path('type').validate(function(type) {
  return !!type;
}, 'Type cannot be blank');

/**
 * Statics
 */
ProjectSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Project', ProjectSchema);

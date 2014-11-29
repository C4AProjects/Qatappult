'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Quote Schema
 */
var QuoteSchema = new Schema({       
  project: {
    type: Schema.ObjectId,
    ref: 'Project'
  },
  company: {
    type: Schema.ObjectId,
    ref: 'Company'
  },
  features: [],
  amount: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  services: [] // Manage company quote per service
});

/**
 * Validations
 */

/**
 * Statics
 */
QuoteSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Quote', QuoteSchema);

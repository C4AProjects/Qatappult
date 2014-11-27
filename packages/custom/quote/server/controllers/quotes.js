'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Quote = mongoose.model('Quote'),
  _ = require('lodash');


/**
 * Find quote by id
 */
exports.quote = function(req, res, next, id) {
  Quote.load(id, function(err, quote) {
    if (err) return next(err);
    if (!quote) return next(new Error('Failed to load quote ' + id));
    req.quote = quote;
    next();
  });
};

/**
 * Create an quote
 */
exports.create = function(req, res) {
  var quote = new Quote(req.body);
  quote.user = req.user;

  quote.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the quote'
      });
    }
    res.json(quote);

  });
};

/**
 * Update an quote
 */
exports.update = function(req, res) {
  var quote = req.quote;

  quote = _.extend(quote, req.body);

  quote.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the quote'
      });
    }
    res.json(quote);

  });
};

/**
 * Delete an quote
 */
exports.destroy = function(req, res) {
  var quote = req.quote;

  quote.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the quote'
      });
    }
    res.json(quote);

  });
};

/**
 * Show an quote
 */
exports.show = function(req, res) {
  res.json(req.quote);
};

/**
 * List of Quotes
 */
exports.all = function(req, res) {
  Quote.find().sort('-created').populate('user', 'name username').exec(function(err, quotes) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the quotes'
      });
    }
    res.json(quotes);

  });
};

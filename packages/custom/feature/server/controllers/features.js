'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Feature = mongoose.model('Feature'),
  _ = require('lodash');


/**
 * Find feature by id
 */
exports.feature = function(req, res, next, id) {
  Feature.load(id, function(err, feature) {
    if (err) return next(err);
    if (!feature) return next(new Error('Failed to load feature ' + id));
    req.feature = feature;
    next();
  });
};

/**
 * Create an feature
 */
exports.create = function(req, res) {
  var feature = new Feature(req.body);
  feature.user = req.user;

  feature.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the feature'
      });
    }
    res.json(feature);

  });
};

/**
 * Update an feature
 */
exports.update = function(req, res) {
  var feature = req.feature;

  feature = _.extend(feature, req.body);

  feature.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the feature'
      });
    }
    res.json(feature);

  });
};

/**
 * Delete an feature
 */
exports.destroy = function(req, res) {
  var feature = req.feature;

  feature.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the feature'
      });
    }
    res.json(feature);

  });
};

/**
 * Show an feature
 */
exports.show = function(req, res) {
  res.json(req.feature);
};

/**
 * List of Features
 */
exports.all = function(req, res) {
  Feature.find().sort('-created').populate('user', 'name username').exec(function(err, features) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the features'
      });
    }
    res.json(features);

  });
};

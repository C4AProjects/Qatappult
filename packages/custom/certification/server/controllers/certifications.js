'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Certification = mongoose.model('Certification'),
  _ = require('lodash');


/**
 * Find certification by id
 */
exports.certification = function(req, res, next, id) {
  Certification.load(id, function(err, certification) {
    if (err) return next(err);
    if (!certification) return next(new Error('Failed to load certification ' + id));
    req.certification = certification;
    next();
  });
};

/**
 * Create an certification
 */
exports.create = function(req, res) {
  var certification = new Certification(req.body);
  certification.user = req.user;

  certification.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the certification'
      });
    }
    res.json(certification);

  });
};

/**
 * Update an certification
 */
exports.update = function(req, res) {
  var certification = req.certification;

  certification = _.extend(certification, req.body);

  certification.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the certification'
      });
    }
    res.json(certification);

  });
};

/**
 * Delete an certification
 */
exports.destroy = function(req, res) {
  var certification = req.certification;

  certification.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the certification'
      });
    }
    res.json(certification);

  });
};

/**
 * Show an certification
 */
exports.show = function(req, res) {
  res.json(req.certification);
};

/**
 * List of Certifications
 */
exports.all = function(req, res) {
  Certification.find().sort('-created').populate('user', 'name username').exec(function(err, certifications) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the certifications'
      });
    }
    res.json(certifications);

  });
};

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Service = mongoose.model('Service'),
  _ = require('lodash');


/**
 * Find service by id
 */
exports.service = function(req, res, next, id) {
  Service.load(id, function(err, service) {
    if (err) return next(err);
    if (!service) return next(new Error('Failed to load service ' + id));
    req.service = service;
    next();
  });
};

/**
 * Create an service
 */
exports.create = function(req, res) {
  var service = new Service(req.body);
  service.user = req.user;

  service.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the service'
      });
    }
    res.json(service);

  });
};

/**
 * Update an service
 */
exports.update = function(req, res) {
  var service = req.service;

  service = _.extend(service, req.body);

  service.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the service'
      });
    }
    res.json(service);

  });
};

/**
 * Delete an service
 */
exports.destroy = function(req, res) {
  var service = req.service;

  service.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the service'
      });
    }
    res.json(service);

  });
};

/**
 * Show an service
 */
exports.show = function(req, res) {
  res.json(req.service);
};

/**
 * List of Services
 */
exports.all = function(req, res) {
  Service.find().sort('-created').populate('user', 'name username').exec(function(err, services) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the services'
      });
    }
    res.json(services);

  });
};

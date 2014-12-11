'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Service = mongoose.model('Service'),
  ServiceType = mongoose.model('ServiceType'),
  Duration = mongoose.model('Duration'),
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
 * Create a service
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
    res.status(201).json(service);
    
  });
};

/**
 * Update a service
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
    res.status(200).json(service);

  });
};

/**
 * Delete a service
 */
exports.destroy = function(req, res) {
  var service = req.service;

  service.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the service'
      });
    }
    res.status(200).json(service);

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
  Service.find({user:req.user}).sort('-created').populate('user', 'name username').exec(function(err, services) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the services'
      });
    }
    res.json(services);

  });
};

/**
 * List of Services type
 */
exports.serviceTypes = function(req, res) {
  ServiceType.find().exec(function(err, serviceTypes) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the service types'
      });
    }
    res.json(serviceTypes);

  });
};

/**
 * List of duration
 */
exports.durations = function(req, res) {
  Duration.find().exec(function(err, durations) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list durations'
      });
    }
    res.json(durations);

  });
};

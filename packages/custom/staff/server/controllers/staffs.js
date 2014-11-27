'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Staff = mongoose.model('Staff'),
  _ = require('lodash');


/**
 * Find staff by id
 */
exports.staff = function(req, res, next, id) {
  Staff.load(id, function(err, staff) {
    if (err) return next(err);
    if (!staff) return next(new Error('Failed to load staff ' + id));
    req.staff = staff;
    next();
  });
};

/**
 * Create an staff
 */
exports.create = function(req, res) {
  var staff = new Staff(req.body);
  staff.user = req.user;

  staff.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the staff'
      });
    }
    res.json(staff);

  });
};

/**
 * Update an staff
 */
exports.update = function(req, res) {
  var staff = req.staff;

  staff = _.extend(staff, req.body);

  staff.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the staff'
      });
    }
    res.json(staff);

  });
};

/**
 * Delete an staff
 */
exports.destroy = function(req, res) {
  var staff = req.staff;

  staff.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the staff'
      });
    }
    res.json(staff);

  });
};

/**
 * Show an staff
 */
exports.show = function(req, res) {
  res.json(req.staff);
};

/**
 * List of Staffs
 */
exports.all = function(req, res) {
  Staff.find().sort('-created').populate('user', 'name username').exec(function(err, staffs) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the staffs'
      });
    }
    res.json(staffs);

  });
};

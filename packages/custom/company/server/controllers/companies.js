'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Company = mongoose.model('Company'),
  _ = require('lodash');

/**
 * Search company by name
 */
exports.searchByName = function(req, res){
    var regex = new RegExp(req.params.name, 'gi');
    Company
    .find({name:regex})
    .sort({created:-1})
    .limit(req.query.limit||50)
    .exec(function(err, list){
       if(err) res.status(401).json({err: err})
       if (list) {
        res.status(200).json(list)
       }
    })
}

/**
 * List Contacts of Company
 */
exports.contactsByCompany = function(req, res) {
  Contact = mongoose.model('Contact')
  Contact
  .find({company: req.company})
  .sort('-created')
  .exec(function(err, contacts) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the contacts',
        details: err
      });
    }
    res.json(contacts);
  });
};

/**
 * Logical Delete company
 */
exports.del = function(req, res) {
  var company = req.company;
  company.status = 'removed';
  company.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot remove the company',
        details: err
      });
    }
    res.json({ sucess: true, msg: 'Company successfully removed!'});
  });
};

/**
 * Find company by id
 */
exports.company = function(req, res, next, id) {
  Company.load(id, function(err, company) {
    if (err) return next(err);
    if (!company) return next(new Error('Failed to load company ' + id));
    req.company = company;
    next();
  });
};

/**
 * Create an company
 */
exports.create = function(req, res) {
  var company = new Company(req.body);
  company.user = req.user;

  company.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the company'
      });
    }
    res.json(company);

  });
};

/**
 * Update an company
 */
exports.update = function(req, res) {
  var company = req.company;

  company = _.extend(company, req.body);

  company.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the company'
      });
    }
    res.json(company);

  });
};

/**
 * Delete an company
 */
exports.destroy = function(req, res) {
  var company = req.company;

  company.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the company'
      });
    }
    res.json(company);

  });
};


/**
 * Show an company
 */
exports.show = function(req, res) {
  res.json(req.company);
};

/**
 * List of Companys
 */
exports.all = function(req, res) {
  Company.find().sort('-created').populate('user', 'name username').exec(function(err, companys) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the companys'
      });
    }
    res.json(companys);

  });
};

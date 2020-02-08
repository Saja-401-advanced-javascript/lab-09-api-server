/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable strict */

'use strict';

/**
 * The middleware will hit on server errors
 * @param {object} req
 * @param {object} res
 * @param {*} next
 */

function errorHandler(err, req, res, next) {
  res.status(500);
  res.Message = 'server error';
  res.json({ error: err, });
}

module.exports = errorHandler;
/* eslint-disable strict */
'use strict';

function errorHandler(err, req, res) {
  res.status(500);
  res.Message = 'server error';
  res.json({ error: err});
}

module.exports = errorHandler;
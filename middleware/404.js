'use strict';

/**
 * The middleware will hit on invalid routes
 * @param {object} req 
 * @param {object} res 
 * @param {*} next 
 */

function notFoundHandler(req, res, next) {
    res.status(404)
    res.message = 'Ops!!, NOT FOUND'
    res.json({ error: 'NOT FOUND' })
}

module.exports = notFoundHandler;
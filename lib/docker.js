/**
 * Require Dockerode
 * @type {Dockerode}
 */
var Docker = require("dockerode");

/**
 * Return an instantiated instance
 * @type {Docker}
 */
exports = module.exports = new Docker();
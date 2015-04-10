var router = require('express').Router();
var docker = new require("../../../lib/docker.js");

/**
 * Containers
 */
router.get('/containers', function(req, res, next) {
	docker.listContainers(function(err, containers){
		res.status(!err ? 200 : 500).json(containers);
	});
});


router.get('/containers/:container', function(req, res, next) {
	docker.getContainers(req.param("container"), function(err, container){
		res.status(!err ? 200 : 500).json(container);
	});
});


module.exports = router;
const route = require('express').Router();
const router = require('./apiRoutes');
const apiRoutes = require('./apiRoutes');

// Prepend "api" to every route declared in "apiRoutes"
router.use('/api', apiRoutes);

module.exports = router;
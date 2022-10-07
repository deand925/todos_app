const router = require('express').Router();
const userRoutes = require('./userRoutes');

// "/api" is already prepended to every route here
// This will prepend "/api/users" to every route declared in user routes 
router.use('/users', userRoutes)

module.exports = router;
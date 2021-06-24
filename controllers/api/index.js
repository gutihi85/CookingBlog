const router = require('express').Router();
const myfavoritesRoutes = require('./myfavoritesRoutes');
const userRoutes = require('./userRoutes');

router.use('/myfavorites', myfavoritesRoutes);
router.use('/user', userRoutes);

module.exports = router;

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('.comments', commentRoutes);

module.exports = router;
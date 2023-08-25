const router = require('express').Router();
const userRoutes = require('./userRoutes');
const avatarRoutes = require('./avatarRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/avatar', avatarRoutes);
router.use('.comments', commentRoutes);

module.exports = router;
const router = require('express').Router();
const peopleRouter = require('./peopleRouter');
const viewsRouter = require('./viewsRouter');

router.use('/people', peopleRouter)
router.use('/views', viewsRouter)

module.exports = router;
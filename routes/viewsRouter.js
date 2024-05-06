const router = require('express').Router();
const { getViewsPeople } = require('../service/viewsPeopleService');

router.get('/people', getViewsPeople)

module.exports = router;
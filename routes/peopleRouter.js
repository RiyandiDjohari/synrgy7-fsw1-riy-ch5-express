const router = require('express').Router();
const { idChecker } = require('../middleware');
const { getPeople, getPeopleById, createPeople, deletePeople, updatePeople } = require("../service/peopleService");

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/', createPeople)
router.delete('/:id', idChecker ,deletePeople)
router.put('/:id', idChecker, updatePeople)

module.exports = router;

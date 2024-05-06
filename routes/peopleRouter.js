const router = require('express').Router();
const { idChecker } = require('../middleware');
const { getPeople, getPeopleById, createPeople, deletePeople, updatePeople, uploadImageHandler } = require("../service/peopleService");
const upload = require('../middleware/uploadHandler');

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/', createPeople)
router.delete('/:id', idChecker ,deletePeople)
router.put('/:id', idChecker, updatePeople)
router.post('/upload', upload.single('image'), uploadImageHandler);

module.exports = router;

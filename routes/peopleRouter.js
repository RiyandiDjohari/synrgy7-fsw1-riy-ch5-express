const router = require('express').Router();
const { idChecker } = require('../middleware');
const { getPeople, getPeopleById, createPeople, deletePeople, updatePeople, uploadImageHandler, cdnUploadImageHandler } = require("../service/peopleService");
const upload = require('../middleware/uploadHandler');
const cdnUpload = require('../middleware/cdnUploadHandler');

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/', createPeople)
router.delete('/:id', idChecker ,deletePeople)
router.put('/:id', idChecker, updatePeople)
router.post('/upload', upload.single('image'), uploadImageHandler);
router.post('/upload/cdn', cdnUpload.single('image'), cdnUploadImageHandler);

module.exports = router;

const express = require('express');
const router = express.Router();
const cookBoookController = require('../controllers/cookBookController');


router.get('/', cookBoookController.getCookBooks);
router.post('/', cookBoookController.createCookBook);
router.put('/:id', cookBoookController.updateCookBook);
router.delete('/:id', cookBoookController.deleteCookBook);
router.get('/:id', cookBoookController.getcookBook);

module.exports = router;

const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');


router.get('/', menuController.getMenus);
router.post('/', menuController.createMenu);
router.put('/:id', menuController.updateMenu);
router.delete('/:id', menuController.deleteMenu);
router.get('/:id', menuController.getMenu);

module.exports = router;

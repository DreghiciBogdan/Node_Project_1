const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {userSchema} = require("../validators/schemas");
const{ validate } = require ('../middleware/validateMiddleware.js');
const{ verifyPermissionEditUser, verifyPermissionGetUser } = require('../middleware/permissionsMiddlewear');

// POST /api/users
router.get('/', verifyPermissionGetUser, userController.getUsers);
router.post('/',verifyPermissionEditUser, validate(userSchema), userController.createUser);
router.put('/:id',verifyPermissionEditUser, userController.updateUser);
router.delete('/:id',verifyPermissionEditUser , userController.deleteUser);
router.get('/:id',verifyPermissionEditUser, userController.getUser);

module.exports = router;

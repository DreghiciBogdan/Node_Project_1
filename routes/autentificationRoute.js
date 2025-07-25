const express = require('express');
const router = express.Router();
const authentificationController = require('../controllers/authentificationController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', authentificationController.logIn);
router.post('/homescreen', verifyToken, authentificationController.homeScreen)
router.post('/logout', authentificationController.logOut);
module.exports = router;

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');


router.get('/', recipeController.getRecipes);
router.post('/', recipeController.createRecipe)
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);
router.get('/:id', recipeController.getRecipe);

module.exports = router;

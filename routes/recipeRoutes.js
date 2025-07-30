const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const {recipeSchema} = require("../validators/schemas");
const{ validateRecipe } = require ('../middleware/validateMiddleware.js');

router.get('/', recipeController.getRecipes);
router.post('/',validateRecipe(recipeSchema), recipeController.createRecipe)
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);
router.get('/:id', recipeController.getRecipe);

module.exports = router;
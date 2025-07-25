const express = require('express');
const router = express.Router();
const cookBook_RecipeController = require('../controllers/cookBook_RecipeController');


router.post('/', cookBook_RecipeController.addRecipeToCookBook);
router.delete('/', cookBook_RecipeController.removeRecipeFromCookBook);
router.get('/cookbook/:cookBook_id/recipes', cookBook_RecipeController.getRecipesByCookBook);

module.exports = router;

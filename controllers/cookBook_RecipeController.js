const cookBook_RecipeService = require("../services/cookBook_RecipeService");

exports.addRecipeToCookBook = async (req, res) => {
    try {
        const { cookBook_id, recipe_id } = req.body;
        const result = await cookBook_RecipeService.addRecipeToCookBook({ cookBook_id, recipe_id });
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error('Error adding recipe to cookbook:', err);
        res.status(500).send('Database error');
    }
};

exports.removeRecipeFromCookBook = async (req, res) => {
    try {
        const { cookBook_id, recipe_id } = req.body;
        const result = await cookBook_RecipeService.removeRecipeFromCookBook({ cookBook_id, recipe_id });
        if (result.affectedRows === 0) {
            return res.status(404).send('Relation not found');
        }
        res.status(200).json({ message: 'Recipe removed from cookbook' });
    } catch (err) {
        console.error('Error removing recipe from cookbook:', err);
        res.status(500).send('Database error');
    }
};

exports.getRecipesByCookBook = async (req, res) => {
    try {
        const { cookBook_id } = req.params;
        const recipes = await cookBook_RecipeService.getRecipesByCookBook(cookBook_id);
        res.status(200).json(recipes);
    } catch (err) {
        console.error('Error fetching recipes for cookbook:', err);
        res.status(500).send('Database error');
    }
};
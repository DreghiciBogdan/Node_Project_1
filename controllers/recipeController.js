const recipeService = require("../services/recipeService");


exports.createRecipe = async (req, res) => {
    try {
        const result = await recipeService.createRecipe(req.body);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error('Error inserting recipe:', err);
        res.status(500).send('Database error');
    }
};

exports.getRecipe = async (req, res) => {
    try {
        const result = await recipeService.getRecipe(req.params.id);
        res.status(200).json(result);
    }catch (error) {
        console.log(error);
        res.status(500).send('Error occured');
    }
}

exports.getRecipes = async (req, res) => {
    try{
        const result = await recipeService.getRecipes(req.body);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
}

exports.updateRecipe = async (req, res) => {
    try{
        const result = await recipeService.updateRecipe(req.body);
        if (result.affectedRows === 0) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
}

exports.deleteRecipe = async (req, res) => {
    try{
        const result = await recipeService.deleteRecipe(req.params.id);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
};
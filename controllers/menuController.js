const menuService = require("../services/menuService");


exports.createMenu = async (req, res) => {
    try {
        const result = await menuService.createMenu(req.body);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error('Error inserting Menu:', err);
        res.status(500).send('Database error');
    }
};

exports.getMenus = async (req, res) => {
    try {
        const result = await menuService.getMenus(req.params.id);
        res.status(200).json(result);
    }catch (error) {
        console.log(error);
        res.status(500).send('Error occured');
    }
}

exports.getMenu = async (req, res) => {
    try{
        const result = await menuService.getMenu(req.body);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
}

exports.updateMenu = async (req, res) => {
    try{
        const result = await menuService.updateMenu(req.body);
        if (result.affectedRows === 0) {
            return res.status(404).send('Menu not found');
        }
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
}

exports.deleteMenu = async (req, res) => {
    try{
        const result = await menuService.deleteMenu(req.params.id);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
};
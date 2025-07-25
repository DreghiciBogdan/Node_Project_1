const cookBookService = require("../services/cookBookService");


exports.createCookBook = async (req, res) => {
    try {
        const result = await cookBookService.createCookBook(req.body);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error('Error inserting cookBook:', err);
        res.status(500).send('Database error');
    }
};

exports.getcookBook = async (req, res) => {
    try {
        const result = await cookBookService.getcookBook(req.params.id);
        res.status(200).json(result);
    }catch (error) {
        console.log(error);
        //res.status(500).send('Error occured');
    }
}

exports.getCookBooks = async (req, res) => {
    try{
        const result = await cookBookService.getCookBooks(req.body);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
}

exports.updateCookBook = async (req, res) => {
    try{
        const result = await cookBookService.updateCookBook(req.body);
        if (result.affectedRows === 0) {
            return res.status(404).send('CookBook not found');
        }
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
}

exports.deleteCookBook = async (req, res) => {
    try{
        const result = await cookBookService.deleteCookBook(req.params.id);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
};
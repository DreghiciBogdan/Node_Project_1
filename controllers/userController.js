const userService = require('../services/userService');

exports.createUser = async (req, res) => {
    try {
        const result = await userService.createUser(req.body);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).send('Database error',err);
    }
};

exports.getUser = async (req, res) => {
    try {
        const result = await userService.getUser(req.params.id);
        res.status(200).json(result);
    }catch (error) {
        console.log(error);
        res.status(500).send('Error occured');
    }
}

exports.getUsers = async (req, res) => {
    try{
        const result = await userService.getUsers(req.body);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
}

exports.updateUser = async (req, res) => {
    try{
        const result = await userService.update(req.body);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const result = await userService.deleteUser(req.params.id);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send('Error occured');
    }
};
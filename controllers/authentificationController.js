const authentification = require("../services/authentificationService.js");

exports.logIn = async (req, res) =>{
    console.log('BODY:', req.body);
    try{
        const { email, password} = req.body;
        const token = await authentification.logIn({email, password});
        console.log('TOKEN:', token);
        res.cookie('token', token,{
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
        });
        res.json({ message: 'Logged in successfully' })
    }catch (err) {
        console.error('Login failed:', err);
        res.status(401).json({ error: 'Invalid email or password',err });
    }
}

exports.homeScreen = async (req, res) => {
    res.json({ message: 'This is the home screen' })
}

exports.logOut = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
};
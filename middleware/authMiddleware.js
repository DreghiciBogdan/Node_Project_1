const jwt = require('jsonwebtoken');
const SECRET_KEY = "SK"

function verifyToken(req, res, next) {
    const token = req.cookies.token;
    //res.status(200).json({ token });
    if (!token) {
        return res.status(401).json({error: 'Access denied. No token provided.' })
    }
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.userId = decoded;
        next();
    }catch(err){
        return res.status(401).json({error: 'Invalid or expired token.'})
    }
}

module.exports = verifyToken;

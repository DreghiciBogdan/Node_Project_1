const jwt = require("jsonwebtoken");
const SECRET_KEY = "SK"

function verifyPermissionEditUser(req, res, next) {
    const token = req.cookies;
    try {
        const decoded = jwt.verify(token.token, SECRET_KEY);
        if (!decoded.permissions.includes(2)) {
            res.status(401).json({ error: "Permissions not allowed" });
        }
        else{
            next()
        }
    }catch(error) {
        return res.status(401).json({'Error': error})
    }
}

function verifyPermissionGetUser(req, res, next) {
    const token = req.cookies;
    try {
        const decoded = jwt.verify(token.token, SECRET_KEY);
        if (!decoded.permissions.includes(1)) {
            res.status(401).json({ error: "Permissions not allowed" });
        }
        else{
            next()
        }
    }catch(error) {
        return res.status(401).json({'Error': error})
    }
}

module.exports = {verifyPermissionEditUser, verifyPermissionGetUser};
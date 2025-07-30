const express = require('express');
const {uploadSingle} = require("../middleware/uploadMiddlewear");
const router = express.Router();

router.post('/', uploadSingle, (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Please upload a file' });
    }

    console.log(req.file);
    res.send('File uploaded');
});


module.exports = router;
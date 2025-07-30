import storage from '../config/upload.js';
import multer from 'multer';
import path from 'path';

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000 },
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb)
    }
}).single('myFile');

function checkFileType(file, cb){
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images only! (jpeg, jpg, png)')
    }
}

export const uploadSingle = upload.single('myFile');

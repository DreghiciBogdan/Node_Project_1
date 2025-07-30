import storage from '../config/upload.js';
import multer from 'multer';

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000 }
})

export const uploadSingle = upload.single('myFile');

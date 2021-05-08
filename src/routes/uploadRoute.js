import express from 'express';
import path from 'path';
import { uploadFile } from '../controllers/uploadController.js';
import multer from 'multer';
const router = express.Router();

const storage = multer.diskStorage({
  filename(req, file, cb) {
    cb(null, `${req.body.fileName}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
});

router.route('/').get(upload.single('file'), uploadFile);

export default router;

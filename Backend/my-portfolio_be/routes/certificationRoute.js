import express from 'express'
import { getCertiController, addCertiController, editCertiController, deleteCertController } from '../controllers/certificationController.js'
import { verifyToken } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/upload.js';


const router = express.Router();

router.use('/getCerti', getCertiController);
router.use('/getCertiSecure', verifyToken, getCertiController);
router.use('/addCertiSecure', verifyToken, upload.single("file"), addCertiController);
router.use('/editCertiSecure', verifyToken, upload.single("file"), editCertiController);
router.delete('/deleteCertiSecure/:id', verifyToken, deleteCertController);


export default router;
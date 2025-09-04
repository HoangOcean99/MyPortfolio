import express from 'express'
import { getGeneralController, editGeneralController } from '../controllers/GeneralController.js'
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/getGeneral', getGeneralController);
router.put('/editGeneral', verifyToken, editGeneralController);

export default router;
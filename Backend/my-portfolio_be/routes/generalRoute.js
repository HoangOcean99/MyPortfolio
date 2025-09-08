import express from 'express'
import { getGeneralController, editGeneralController, addContactController } from '../controllers/generalController.js'
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/getGeneral', getGeneralController);
router.get('/getGeneralSecure', verifyToken, getGeneralController);
router.put('/editGeneral', verifyToken, editGeneralController);
router.post('/addContact', addContactController);


export default router;
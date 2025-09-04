import express from 'express'
import { getGeneralController } from '../controllers/GeneralController.js'

const router = express.Router();

router.get('/getGeneral', getGeneralController);

export default router;
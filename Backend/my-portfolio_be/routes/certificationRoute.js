import express from 'express'
import { getCertiController } from '../controllers/certificationController.js'

const router = express.Router();

router.use('/getCerti', getCertiController);

export default router;
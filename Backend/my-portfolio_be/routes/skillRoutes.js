import express from 'express';
import * as skillController from '../controllers/skillController.js'

const router = express.Router();

router.get('/getSkills', skillController.getSkills);

export default router;
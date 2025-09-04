import express from 'express';
import { getSkills } from '../controllers/skillController.js'

const router = express.Router();

router.get('/getSkills', getSkills);

export default router;
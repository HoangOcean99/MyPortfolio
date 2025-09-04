import express from 'express'
import { getProjectsController } from '../controllers/projectController.js';

const router = express.Router();

router.get('/getProjects', getProjectsController);

export default router;


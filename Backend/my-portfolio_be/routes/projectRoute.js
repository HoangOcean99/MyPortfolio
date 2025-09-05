import express from 'express'
import { addProjectsController, deleteProjectsController, editProjectsController, getProjectsController } from '../controllers/projectController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/upload.js';


const router = express.Router();

router.get('/getProjects', getProjectsController);
router.get('/getProjectsSecure',verifyToken, getProjectsController);
router.post('/addProjectsSecure', verifyToken, upload.single("file"), addProjectsController);
router.put('/editProjectsSecure', verifyToken, upload.single("file"), editProjectsController);
router.delete('/deleteProjectsSecure/:id', verifyToken, deleteProjectsController);


export default router;


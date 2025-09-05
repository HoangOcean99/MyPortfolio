import express from 'express';
import { addSkillsController, deleteSkillsController, editSkillsController, getSkillsConroller } from '../controllers/skillController.js'
import { verifyToken } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/upload.js';


const router = express.Router();

router.get('/getSkills', getSkillsConroller);
router.get('/getSkillsSecure', verifyToken, getSkillsConroller);
router.post('/addSkillsSecure', verifyToken, upload.single("file"), addSkillsController);
router.put('/editSkillsSecure', verifyToken, upload.single("file"), editSkillsController);
router.delete('/deleteSkillsSecure/:id', verifyToken, deleteSkillsController);

export default router;
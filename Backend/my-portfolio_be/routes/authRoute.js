import express from 'express';
import { login, signout } from '../controllers/authController.js';

const router = express.Router();

// router.post('/register', registerController);
router.post('/login', login);
router.post('/logout', signout);


export default router;
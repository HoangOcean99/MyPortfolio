import express from 'express';
import { StatusCodes } from 'http-status-codes';
import skillRoutes from './skillRoute.js'
import projectRoutes from './projectRoute.js'
import certiRoutes from './certificationRoute.js'
import geneRoutes from './generalRoute.js'
import authRoutes from './authRoute.js';

const router = express.Router();

/* GET status route */
router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json('APIs are ready to use');
});

router.use('/skills', skillRoutes);
router.use('/projects', projectRoutes);
router.use('/certi', certiRoutes);
router.use('/general', geneRoutes);
router.use('/auth', authRoutes);


// xuất router dưới tên APIs_V1
export const APIs_V1 = router;

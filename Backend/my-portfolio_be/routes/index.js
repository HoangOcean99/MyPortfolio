import express from 'express';
import { StatusCodes } from 'http-status-codes';
import skillRoutes from './skillRoutes.js'

const router = express.Router();

/* GET status route */
router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json('APIs are ready to use');
});

router.use('/skills', skillRoutes)

// xuất router dưới tên APIs_V1
export const APIs_V1 = router;

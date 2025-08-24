import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

/* GET status route */
router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json('APIs are ready to use');
});

// xuất router dưới tên APIs_V1
export const APIs_V1 = router;

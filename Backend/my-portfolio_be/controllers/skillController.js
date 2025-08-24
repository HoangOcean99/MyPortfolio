import * as skillService from '../services/skillService.js';
import { StatusCodes } from 'http-status-codes';
 import ApiError from '../utils/apiError.js';

export const getSkills = async (req, res, next) => {
    try {
        const response = await skillService.getSkills();
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
    
}
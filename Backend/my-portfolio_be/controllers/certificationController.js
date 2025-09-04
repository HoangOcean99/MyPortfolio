import { StatusCodes } from "http-status-codes";
import { getCerti } from "../services/certificationService.js";
import ApiError from "../utils/apiError.js";

export const getCertiController = async (req, res, next) => {
    try {
        const response = await getCerti();
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}
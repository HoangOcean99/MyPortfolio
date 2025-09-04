import { StatusCodes } from "http-status-codes";
import { getGeneral, editGeneral } from "../services/generalService.js";
import ApiError from "../utils/apiError.js";

export const getGeneralController = async (req, res, next) => {
    try {
        const response = await getGeneral();
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message))
    }
}

export const editGeneralController = async (req, res, next) => {
    try {
        const {linkCV, years, projects, gpa} = req.body;
        const response = await editGeneral(linkCV, years, gpa, projects);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message))
    }
}
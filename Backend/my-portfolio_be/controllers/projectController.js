import { getProjects } from "../services/projectService.js";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/apiError.js";

export const getProjectsController = async (req, res, next) => {
    try {
        const response = await getProjects();
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}
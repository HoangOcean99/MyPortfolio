import * as skillService from '../services/skillService.js';
import { StatusCodes } from 'http-status-codes';
import ApiError from '../utils/apiError.js';

export const getSkillsConroller = async (req, res, next) => {
    try {
        const response = await skillService.getSkills();
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}

export const addSkillsController = async (req, res, next) => {
    try {
        const { name, type, group } = req.body;
        const file = req.file;

        if (!file) {
            throw new Error("File is required");
        }

        const response = await skillService.addSkills(file, name, type, group);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
};

export const editSkillsController = async (req, res, next) => {
    try {
        const { index, name, type, group } = req.body;
        const file = req.file;

        if (!file) {
            throw new Error("File is required");
        }

        const response = await skillService.editSkills(index, file, name, type, group);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}
export const deleteSkillsController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const response = await skillService.deleteSkills(id);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}

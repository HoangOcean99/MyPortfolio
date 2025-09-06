import { addProjects, deleteProjecs, editProject, getProjects } from "../services/projectService.js";
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

export const addProjectsController = async (req, res, next) => {
    try {
        const { title, desc, role, team, time, demo, github, type } = req.body;
        const file = req.file;

        // Parse lại mảng từ JSON string
        const stacks = JSON.parse(req.body.stacks || "[]");
        const respons = JSON.parse(req.body.respons || "[]");
        const achieve = JSON.parse(req.body.achieve || "[]");
        const feats = JSON.parse(req.body.feats || "[]");

        if (!file) {
            throw new Error("File is required");
        }

        const response = await addProjects(title, desc, file, role, team, time, demo, github, type, stacks, respons, achieve, feats);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
};

export const editProjectsController = async (req, res, next) => {
    try {
        const { index, title, desc, role, team, time, demo, github, type } = req.body;
        const img = req.file;

        // Parse lại mảng từ JSON string
        const stacks = JSON.parse(req.body.stacks || "[]");
        const respons = JSON.parse(req.body.respons || "[]");
        const achieve = JSON.parse(req.body.achieve || "[]");
        const feats = JSON.parse(req.body.feats || "[]");

        if (!img) {
            throw new Error("File is required");
        }

        const response = await editProject(index, title, desc, img, role, team, time, demo, github, type, stacks, respons, achieve, feats);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
};
export const deleteProjectsController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const response = await deleteProjecs(id);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}

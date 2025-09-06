import { StatusCodes } from "http-status-codes";
import { getCerti, addCert, editCert, deleteCert } from "../services/certificationService.js";
import ApiError from "../utils/apiError.js";

export const getCertiController = async (req, res, next) => {
    try {
        const response = await getCerti();
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}

export const addCertiController = async (req, res, next) => {
    try {
        const { title, link } = req.body;
        const image = req.file;

        if (!image) {
            throw new Error("File is required");
        }

        const response = await addCert(title, image, link);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
};

export const editCertiController = async (req, res, next) => {
    try {
        const { index, title, link } = req.body;
        const image = req.file;

        if (!image) {
            throw new Error("File is required");
        }

        const response = await editCert(index, image, title, link );
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}
export const deleteCertController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const response = await deleteCert(id);
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}   
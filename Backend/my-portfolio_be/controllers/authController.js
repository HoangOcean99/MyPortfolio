import { StatusCodes } from "http-status-codes";
import { register, login } from "../services/authService.js";
import ApiError from "../utils/apiError.js";

const isProd = process.env.BUILD_MODE === 'prod';


export const registerController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        await register(email, password);
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}
export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const data = await login(email, password);

        // Lấy access_token
        const token = data.session.access_token;

        // Trả token trong JSON
        res.status(StatusCodes.OK).json({
            message: "Login successful",
            user: data.user,
            token: token
        });
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}

export const logoutController = async (req, res, next) => {
    try {
        // Trả về token null để client biết đã logout
        res.status(StatusCodes.OK).json({
            message: "Logged out successfully",
            token: null
        });
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
};

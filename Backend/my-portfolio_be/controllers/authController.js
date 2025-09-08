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

        // Gửi token về client bằng cookie httpOnly

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',  // chữ N hoa
            maxAge: 60 * 60 * 1000,
            path: '/'
        });





        res.status(StatusCodes.OK).json({
            message: "Login successful",
            user: data.user
        });
    } catch (error) {
        next(new ApiError(StatusCodes.BAD_REQUEST, error.message));
    }
}

export const logoutController = (req, res) => {
    // Xóa cookie token
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.BUILD_MODE !== 'dev',
        sameSite: 'strict',
        path: '/'
    });

    res.status(StatusCodes.OK).json({ message: "Logged out successfully" });
};

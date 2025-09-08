import { supabase } from "../utils/supabaseFile.js";
import ApiError from "../utils/apiError.js";
import { StatusCodes } from "http-status-codes";

export const verifyToken = async (req, res, next) => {
    try {
        // Lấy token từ header Authorization
        const authHeader = req.headers['authorization'];
        if (!authHeader) throw new ApiError(StatusCodes.UNAUTHORIZED, "No token provided");

        const token = authHeader.split(' ')[1]; // Bearer <token>
        if (!token) throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid token");

        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (error || !user) throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid token");

        req.user = user;
        next();
    } catch (err) {
        next(new ApiError(StatusCodes.UNAUTHORIZED, err.message || "Invalid token"));
    }
};

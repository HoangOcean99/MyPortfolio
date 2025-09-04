import { supabase } from "../utils/supabaseFile.js";
import ApiError from "../utils/apiError.js";
import { StatusCodes } from "http-status-codes";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.headers['authorization']?.split(' ')[1];
        if (!token) throw new ApiError(StatusCodes.UNAUTHORIZED, "No token provided");

        // Supabase client kiểm tra session/user
        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (error || !user) throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid token");

        req.user = user;
        next();
    } catch (err) {
        next(new ApiError(StatusCodes.UNAUTHORIZED, err.message || "Invalid token"));
    }
};

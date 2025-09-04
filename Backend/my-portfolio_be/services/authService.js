import { supabase } from "../utils/supabaseFile.js";

export const register = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(error.message);
}

export const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    return data;
}
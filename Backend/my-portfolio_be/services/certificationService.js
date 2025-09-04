import ApiError from "../utils/apiError.js";
import { supabase } from "../utils/supabaseFile.js";

export const getCerti =  async() =>{
    const {data, error} = await supabase.from('Certifications').select('*');
    if(error) throw new Error(error.message);
    return data;
}
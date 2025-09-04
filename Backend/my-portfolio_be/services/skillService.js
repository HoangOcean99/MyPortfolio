import { supabase } from "../utils/supabaseFile.js";


export const getSkills = async () => {
    const { data, error } = await supabase.from('Skills').select('*');
    if(error) throw new Error(error.message);
    return data;
}
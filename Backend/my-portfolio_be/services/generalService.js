import { supabase } from "../utils/supabaseFile.js";

export const getGeneral = async () => {
    const {data, error} = await supabase.from('GeneralInfor').select('*');
    if(error) throw new Error(error.message);
    return data;
}
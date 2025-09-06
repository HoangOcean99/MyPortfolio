import { supabase } from "../utils/supabaseFile.js";


export const getGeneral = async () => {
    const { data, error } = await supabase.from('GeneralInfor').select('*');
    if (error) throw new Error(error.message);
    return data;
}

export const editGeneral = async (linkCV, years, gpa, projects) => {
    const { data, error } = await supabase.from('GeneralInfor').update(
        {
            linkCV: linkCV,
            GPA: gpa,
            projectFinished: projects,
            yearCoding: years
        }
    ).eq('id', 1)
    if (error) throw new Error(error.message);
    return data;
}

export const addContact = async (fullname, email, message) => {
    const { data, error } = await supabase.from('ContactMe').insert(
        {
            fullname: fullname,
            email: email,
            message: message,
        }
    )
    if (error) throw new Error(error.message);
    return data;
}
import { supabase } from "../utils/supabaseFile.js";


export const getProjects = async () => {
    const { data, error } = await supabase.from('Projects').select(
        `*, ProjectStacks(idStacks, stacks), 
        ProjectResponsibilities(idResp, responsibilities), 
        ProjectFeatures(idFeat, features), 
        ProjectAchievements(idAchie, achievements)`
    );
    if (error) throw new Error(error.message);
    return data;
}
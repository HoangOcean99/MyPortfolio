import { removeImage, uploadImage } from "../utils/functionSupbase.js";
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

const addSideTable = async (stacks, respons, feats, achieve, index) => {
    const stackRow = stacks.map((s) => ({
        idProject: index,
        stacks: s,
    }))
    const responRow = respons.map((s) => ({
        idProject: index,
        responsibilities: s,
    }))
    const featRow = feats.map((s) => ({
        idProject: index,
        features: s,
    }))
    const achieveRow = achieve.map((s) => ({
        idProject: index,
        achievements: s,
    }))
    // Insert vào bảng ProjectStacks
    const { data: stackRes, error: errorStack } = await supabase
        .from("ProjectStacks")
        .insert(stackRow);
    if (errorStack) throw new Error(errorStack.message);

    // Insert vào bảng ProjectResponsibilities
    const { data: responRes, error: errorRespon } = await supabase
        .from("ProjectResponsibilities")
        .insert(responRow);
    if (errorRespon) throw new Error(errorRespon.message);

    // Insert vào bảng ProjectAchievements
    const { data: achieveRes, error: errorAchieve } = await supabase
        .from("ProjectAchievements")
        .insert(achieveRow);
    if (errorAchieve) throw new Error(errorAchieve.message);

    // Insert vào bảng ProjectFeatures
    const { data: featRes, error: errorFeat } = await supabase
        .from("ProjectFeatures")
        .insert(featRow);
    if (errorFeat) throw new Error(errorFeat.message);
}

const deleteSideTable = async (index) => {
    const { data: featRes, error: errorFeat } = await supabase
        .from("ProjectFeatures")
        .delete().eq('idProject', index);
    if (errorFeat) throw new Error(errorFeat.message);
    const { data: achieveRes, error: errorAchieve } = await supabase
        .from("ProjectAchievements")
        .delete().eq('idProject', index);
    if (errorFeat) throw new Error(errorFeat.message);
    const { data: responRes, error: errorRespon } = await supabase
        .from("ProjectResponsibilities")
        .delete().eq('idProject', index);
    if (errorFeat) throw new Error(errorFeat.message);
    const { data: stackRes, error: errorStack } = await supabase
        .from("ProjectStacks")
        .delete().eq('idProject', index);
    if (errorFeat) throw new Error(errorFeat.message);
}

export const addProjects = async (title, desc, img, role, team, time, demo, github, type, stacks, respons, achieve, feats) => {
    const url = await uploadImage(img, 'Projects');
    const { data: projectData, error } = await supabase.from('Projects').insert(
        {
            title: title,
            desc: desc,
            img: url,
            role: role,
            team: team,
            time: time,
            demo: demo,
            github: github,
            type: type
        }
    ).select('id').single();

    await addSideTable(stacks, respons, achieve, feats, projectData.id);

    return projectData;
}


export const editProject = async (index, title, desc, img, role, team, time, demo, github, type, stacks, respons, achieve, feats) => {
    await deleteSideTable(index);

    const url = await uploadImage(img, 'Projects');

    const { data: Projects, errorProjects } = await supabase.from('Projects').select('img').eq('id', index);
    if (errorProjects) throw new Error(errorProjects.message);

    const dataRemove = await removeImage(Projects[0].img, 'Projects');
    const { data, error } = await supabase.from('Projects').update(
        {
            title: title,
            desc: desc,
            img: url,
            role: role,
            team: team,
            time: time,
            demo: demo,
            github: github,
            type: type
        }
    ).eq('id', index)

    if (error) throw new Error(error.message);

    await addSideTable(stacks, respons, achieve, feats, index);
    return data;
}
export const deleteProjecs = async (index) => {
    await deleteSideTable(index);
    const { data: skills, errorSkills } = await supabase.from('Projects').select('img').eq('id', index);
    if (errorSkills) throw new Error(errorSkills.message);
    const dataRemove = await removeImage(skills[0].img, 'Projects');

    const { data, error } = await supabase.from('Projects').delete().eq('id', index)
    if (error) throw new Error(error.message);
    return data;
}
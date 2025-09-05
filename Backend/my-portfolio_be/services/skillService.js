import { removeImage, uploadImage } from "../utils/functionSupbase.js";
import { supabase } from "../utils/supabaseFile.js";


export const getSkills = async () => {
    const { data, error } = await supabase.from('Skills').select('*');
    if (error) throw new Error(error.message);
    return data;
}

export const addSkills = async (file, name, type, group) => {
    const url = await uploadImage(file, 'Skills');
    const { data, error } = await supabase.from('Skills').insert(
        {
            nameSkill: name,
            image: url,
            typeSkill: type,
            groupSkill: group
        }
    )
    if (error) throw new Error(error.message);
    return data;
}

export const editSkills = async (index, file, name, type, group) => {
    const url = await uploadImage(file, 'Skills');

    const { data: skills, errorSkills } = await supabase.from('Skills').select('image').eq('id', index);
    if (errorSkills) throw new Error(errorSkills.message);
    console.log('image', skills[0].image);

    const dataRemove = await removeImage(skills[0].image, 'Skills');
    const { data, error } = await supabase.from('Skills').update(
        {
            nameSkill: name,
            image: url,
            typeSkill: type,
            groupSkill: group
        }
    ).eq('id', index)
    if (error) throw new Error(error.message);
    return data;
}

export const deleteSkills = async (index) => {
    const { data: skills, errorSkills } = await supabase.from('Skills').select('image').eq('id', index);
    if (errorSkills) throw new Error(errorSkills.message);
    const dataRemove = await removeImage(skills[0].image, 'Skills');

    const { data, error } = await supabase.from('Skills').delete().eq('id', index)
    if (error) throw new Error(error.message);
    return data;
}
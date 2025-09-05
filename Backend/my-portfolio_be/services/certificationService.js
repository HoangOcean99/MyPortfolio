import { removeImage, uploadImage } from "../utils/functionSupbase.js";
import { supabase } from "../utils/supabaseFile.js";


export const getCerti = async () => {
    const { data, error } = await supabase.from('Certifications').select('*');
    if (error) throw new Error(error.message);
    return data;
}

export const addCert = async (title, image, link) => {
    const url = await uploadImage(image, 'Certification');
    const { data, error } = await supabase.from('Certifications').insert(
        {
            title: title,
            image: url,
            link: link,
        }
    )
    if (error) throw new Error(error.message);
    return data;
}

export const editCert = async (index, image, title, link) => {
    const url = await uploadImage(image, 'Certification');
    
    const {data: cert, errorCert} = await supabase.from('Certifications').select('image').eq('idCert', index);
    if(errorCert) throw new Error(errorCert.message);

    const dataRemove = await removeImage(cert[0].image, 'Certification');
    const { data, error } = await supabase.from('Certifications').update(
        {
            title: title,
            image: url,
            link: link,
        }
    ).eq('idCert', index).select();
    if (error) throw new Error(error.message);
    return data;
}
export const deleteCert = async (index) => {
    const { data: skills, errorSkills } = await supabase.from('Certifications').select('image').eq('idCert', index);
    if (errorSkills) throw new Error(errorSkills.message);
    const dataRemove = await removeImage(skills[0].image, 'Certification');

    const { data, error } = await supabase.from('Certifications').delete().eq('idCert', index)
    if (error) throw new Error(error.message);
    return data;
}
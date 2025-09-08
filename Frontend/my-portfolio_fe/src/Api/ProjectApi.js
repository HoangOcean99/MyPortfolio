import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getProject = async () => {
    const response = await axios.get(`${url}/projects/getProjects`)
    return response;
}
export const getProjectSecure = async () => {
    const response = await axios.get(`${url}/projects/getProjectsSecure`, {
        withCredentials: true,
    })
    return response;
}


export const addProjectSecure = async ({ title, desc, file, role, team, time, demo, github, type, stacks, respons, achieve, feats }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("file", file);
    formData.append("role", role);
    formData.append("team", team);
    formData.append("time", time);
    formData.append("demo", demo);
    formData.append("github", github);
    formData.append("type", type);

    // Các mảng (stacks, respons, achieve, feats) cần stringify
    formData.append("stacks", JSON.stringify(stacks || []));
    formData.append("respons", JSON.stringify(respons || []));
    formData.append("achieve", JSON.stringify(achieve || []));
    formData.append("feats", JSON.stringify(feats || []));


    const response = await axios.post(`${url}/projects/addProjectsSecure`, formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
};

export const editProjectSecure = async ({ index, title, desc, file, role, team, time, demo, github, type, stacks, respons, achieve, feats }) => {
    const formData = new FormData();
    formData.append("index", index);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("file", file);
    formData.append("role", role);
    formData.append("team", team);
    formData.append("time", time);
    formData.append("demo", demo);
    formData.append("github", github);
    formData.append("type", type);

    // Các mảng (stacks, respons, achieve, feats) cần stringify
    formData.append("stacks", JSON.stringify(stacks));
    formData.append("respons", JSON.stringify(respons));
    formData.append("achieve", JSON.stringify(achieve));
    formData.append("feats", JSON.stringify(feats));

    const response = await axios.put(`${url}/projects/editProjectsSecure`, formData, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
};
export const deleteProjectSecure = async (id) => {
    const response = await axios.delete(`${url}/projects/deleteProjectsSecure/${id}`, {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
};
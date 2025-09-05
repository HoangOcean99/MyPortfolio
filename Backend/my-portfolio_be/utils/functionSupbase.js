import { supabase } from "./supabaseFile.js";

export const uploadImage = async (file, folder) => {
    const fileExt = file.originalname.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { data, error } = await supabase.storage
        .from("Portfolio")
        .upload(filePath, file.buffer, {
            contentType: file.mimetype, // cần có để file nhận đúng MIME
        });

    if (error) {
        console.error("Upload error:", error);
        return null;
    }

    // Lấy public URL (nếu bucket cho phép public)
    const { data: urlData } = supabase.storage
        .from("Portfolio")
        .getPublicUrl(filePath);

    return urlData.publicUrl;
};

export const removeImage = async (url, folder) => {
    const fileName = url.split("/").pop();
    const filePath = `${folder}/${fileName}`;

    const { data, error } = await supabase.storage
        .from("Portfolio")
        .remove([filePath]);

    if (error) {
        console.error("Remove error:", error);
        return null;
    }

    console.log("Removed:", data);
    return data;
};
import 'dotenv/config';

export const env = {
    BUILD_MODE: process.env.BUILD_MODE,
    LOCAL_DEV_APP_PORT: process.env.LOCAL_DEV_APP_PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL
};

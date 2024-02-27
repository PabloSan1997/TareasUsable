import 'dotenv/config';

export const envVariables = {
    db_url: process.env.URL_DATABASE as string,
    port: process.env.PORT || 3005,
    dev_mode: process.env.DEV_MODE == 'development',
    key: process.env.JWT_KEY as string
}
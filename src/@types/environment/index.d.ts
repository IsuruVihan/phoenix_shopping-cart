declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_S3_KEY: string;
        REACT_APP_S3_SECRET: string;
        REACT_APP_BUCKET_NAME: string;
        REACT_APP_BUCKET_REGION: string;
    }
}

export {}
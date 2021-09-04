// import { cleanEnv, str } from 'envalid'

const envalid = require('envalid')

const env = envalid.cleanEnv(process.env, {
    REACT_APP_S3_KEY: envalid.str(),
    REACT_APP_S3_SECRET: envalid.str(),
    REACT_APP_BUCKET_NAME: envalid.str({ default: 'phoenix-cart-images' }),
    REACT_APP_BUCKET_REGION: envalid.str({ default: 'ap-southeast-1' }),
})

export default  env;
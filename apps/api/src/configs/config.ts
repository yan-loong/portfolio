
require('dotenv').config();

const { env } = process;

const config = {
  API_PORT: env.API_PORT,
  DB_PORT: env.DB_PORT
}

export default config

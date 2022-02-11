
require('dotenv').config();

const {
  API_PORT,
  DB_PORT,
  DB_NAME
} = process.env;


export default {
  API_PORT,
  DB_PORT,
  DB_NAME,
}

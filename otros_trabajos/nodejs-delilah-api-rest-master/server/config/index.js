if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const JSON_ENV_VARIABLES = require("./env.variables.json");
const NODE_ENV = process.env.NODE_ENV || "development";
const ENV_VARIABLES = JSON_ENV_VARIABLES[NODE_ENV];

module.exports = {
  ENVIRONMENT: ENV_VARIABLES.ENVIRONMENT,
  PORT: ENV_VARIABLES.PORT || 8080,
  SECRET_TOKEN: ENV_VARIABLES.SECRET_TOKEN,
  DB_NAME: ENV_VARIABLES.DB_NAME,
  DB_USERNAME: ENV_VARIABLES.DB_USERNAME,
  DB_PASSWORD: ENV_VARIABLES.DB_PASSWORD,
  DB_HOST: ENV_VARIABLES.DB_HOST,
  DB_DIALECT: ENV_VARIABLES.DB_DIALECT,
  EXPIRES_IN_TOKEN: ENV_VARIABLES.EXPIRES_IN_TOKEN,
  ADMIN_ROLE_ID: ENV_VARIABLES.ADMIN_ROLE_ID,
  TIME_ZONE: ENV_VARIABLES.TIME_ZONE
};

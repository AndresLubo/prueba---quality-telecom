require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: true,
  },
};

module.exports = config;

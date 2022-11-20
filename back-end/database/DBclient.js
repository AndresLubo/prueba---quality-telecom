const { Pool } = require("pg");
const config = require("../env-config/config.js");

const pool = new Pool({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  ssl: config.database.ssl
});


pool.on("error", (err) => console.log("Ocurrió un error al conectar con la base de datos"));


module.exports = pool;
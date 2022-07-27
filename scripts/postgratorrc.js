/* eslint-disable */

require("dotenv").config();
const parse = require("pg-connection-string").parse;

const conn = parse(process.env["DATABASE_URL"]);

module.exports = {
  migrationPattern: "scripts/migrations/*",
  driver: "pg",
  host: conn.host,
  port: conn.port,
  database: conn.database,
  username: conn.user,
  password: conn.password,
};

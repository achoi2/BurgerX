const dotenv = require('dotenv');
dotenv.config();
const pg = require("pg-promise")();
const DBConfig = `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:5432/restaurant`;
const DB = pg(DBConfig);

module.exports =  {DB};

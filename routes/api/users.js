const express = require("express");
const rouuter = express.Router();

rouuter.get("/", (req, res) => res.json({ msg: "GET USER" }));

module.exports = rouuter;

const express = require("express");
const router = express.Router();
const { DB } = require("../../database");

router.get("/", (req, res) => {
  DB.any("SELECT * FROM menu")
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;

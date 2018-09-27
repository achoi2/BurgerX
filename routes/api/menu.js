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

router.post("/newitem", (req, res) => {
  let newMenuItem = {
    title: req.body.title,
    imageurl: req.body.imageurl,
    details: req.body.details,
    price: req.body.price,
    thumbsup: req.body.thumbsup
  };
  DB.one(
    `INSERT INTO menu (title, imageurl, details, price, thumbsup)
  VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [
      newMenuItem.title,
      newMenuItem.imageurl,
      newMenuItem.details,
      newMenuItem.price,
      newMenuItem.thumbsup
    ]
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.send({ error: err });
    });
});

module.exports = router;

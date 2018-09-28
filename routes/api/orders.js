const express = require("express");
const router = express.Router();
const { DB } = require("../../database");

router.get("/", (req, res) => {
  DB.any("SELECT * FROM orders")
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.post("/new", (req, res) => {
  let newOrder = {
    client: req.body.client,
    phone: req.body.phone,
    items: req.body.items,
  };
  console.log(newOrder)
  DB.one(
    `INSERT INTO orders (client, phone, items) 
  VALUES ($1, $2, $3) RETURNING *;`,
    [
      newOrder.client,
      newOrder.phone,
      newOrder.items
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

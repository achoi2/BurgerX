const express = require("express");
const router = express.Router();
const { DB } = require("../../database");

router.post("/order", (req, res) => {
  let newOrder = {
    client: req.body.client,
    phone: req.body.phone,
    items: req.body.items,
  };

  DB.one(
    `INSERT INTO order (client, phone, items) 
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

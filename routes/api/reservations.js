const express = require("express");
const router = express.Router();
const DB = require("../../database");

router.get("/", (req, res) => {
  DB.one("SELECT * FROM reservations")
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.post("/reserve", (req, res) => {
  let newReservation = {
    client: req.body.client,
    phone: req.body.phone,
    party_size: req.body.party_size,
    reserve_date: req.body.reserve_date,
    reserved_time: req.body.reserved_time
  };
  DB.one(
    `INSERT INTO reservations (client, phone, party_size, reserve_date, reserved_time) 
  VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [
      newReservation.client,
      newReservation.phone,
      newReservation.party_size,
      newReservation.reserve_date,
      newReservation.reserved_time
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

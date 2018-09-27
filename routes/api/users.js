const express = require("express");
const router = express.Router();
const { validateToken } = require("./validate");
const { JwtPassword } = require("../../database");
const jwt = require("jsonwebtoken");
const { DB } = require("../../database");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  bcrypt.hash(req.body.user_password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      let newUser = {
        email: req.body.email,
        user_password: hash
      };
      DB.one(
        `INSERT INTO users (email, user_password) VALUES ($1, $2)RETURNING *;`,
        [newUser.email, newUser.user_password]
      )
        .then(data => {
          let token = jwt.sign({ id: data.id }, JwtPassword, {
            expiresIn: "1d"
          });
          res.send({ token });
        })
        .catch(err => {
          console.log(err);
          res.send({ error: err });
        });
    }
  });
});

router.delete('/delete/:id', (req,res) => {
  let menuItem = req.params.id;
  DB.any(`DELETE FROM menu WHERE id=${menuItem}`).then(() => res.send(`DELETED ITEM`));
});


module.exports = router;

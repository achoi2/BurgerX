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

// router.post("/login", validateToken, (req, res) => {
//   bcrypt
//     .compare(req.body.user_password, req.body.user_password, (err, success) => {
//       if (err) {
//         return res.status(401).json({ msg: "Auth Failed" });
//       }
//       if (success) {
//         const token = jwt.sign({ id: users.id }, JwtPassword, {
//           expiresIn: "1h"
//         });
//         return res.status(200).json({ msg: "Authorized", token: token });
//       }
//       res.status(401).json({ msg: "Auth Failed" });
//     });
// });


module.exports = router;

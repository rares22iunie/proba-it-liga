const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const validator = require("email-validator");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (
    req.body.username &&
    req.body.email &&
    req.body.password &&
    req.body.password.length > 5 &&
    validator.validate(req.body.email) == true
  ) {
    try {
      bcrypt
        .hash(password, 2)
        .then(async (hash) => {
          const user = new User({
            username: username,
            email: email,
            password: hash,
          });

          const duplicateUser = await User.findOne({ email: user.email });

          if (duplicateUser) {
            return res.send({
              success: false,
              message: "User with that email already exists!",
            });
          }

          const duplicateUser2 = await User.findOne({
            username: user.username,
          });

          if (duplicateUser2) {
            return res.send({
              success: false,
              message: "User with that username already exists!",
            });
          }

          // User.find() -> returneaza TOTI userii
          // User.findByID(_id) -> returneaza un user cu id-ul _id, daca exista

          user.save();

          return res.send({
            success: true,
          });
        })
        .catch((error) =>
          res.status(400).json({
            message: "Password not hashed",
            error: error.message,
          })
        );
    } catch (e) {
      return res.status(400).send({
        message: "Error: " + e.message,
      });
    }
  } else {
    return res.status(400).send({
      message: "Data incomplete or password too small or bad email",
    });
  }
});

module.exports = router;

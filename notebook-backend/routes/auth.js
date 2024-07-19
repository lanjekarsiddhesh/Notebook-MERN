const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secreat_key = "x6mz3TiWZSXAbN1K7R1aya"

//SignUp User using POST: "/api/v1/auth/SignUp".
router.post(
  "/SignUp",
  body("name")
    .isLength({ min: 3 })
    .withMessage("Name must be at leasst 3 characters"),
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at 5 characters"),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .send({ error: "User already exists with this email." });
    }
    const salt = await bcrypt.genSalt(10)
    const SecurePassword = await bcrypt.hash(req.body.password,salt)
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: SecurePassword,
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const JWTtoken = jwt.sign(data, secreat_key);
    res.json({ status: 200, message: "User created successfully", token: JWTtoken });
    // .then(user => res.json(user))
    // .catch(err => err.message.includes("email_1 dup key")?res.json({error:"This email id is already used."}):res.json({error:err.message}));
  }
);

module.exports = router;

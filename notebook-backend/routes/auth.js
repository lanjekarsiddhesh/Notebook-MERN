const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchUser");

const secreat_key = "x6mz3TiWZSXAbN1K7R1aya";
let success;

//SignUp User using POST method: "/api/v1/auth/SignUp".
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
      success = false
      return res.status(400).send({success:success, error: result.array() });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      success = false
      return res
        .status(400)
        .send({success:success, error: "User already exists with this email." });
    }
    const salt = await bcrypt.genSalt(10);
    const SecurePassword = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: SecurePassword,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    const JWTtoken = jwt.sign(data, secreat_key);
    success = true
    res.json({
      status: 200,
      success:success,
      message: "User created successfully",
      token: JWTtoken,
    });
  }
);

//Login User using POST method: "/api/v1/auth/Login".
router.post(
  "/Login",
  body("email").isEmail().withMessage("Please enter a correct credentials"),
  body("password").exists().withMessage("Please enter a correct credentials"),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      success = false
      return res.send({ success:success, error: result.array() });
    }
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user){
        success = false
        return res
        .status(400)
        .send({success:success, error: "Please enter a correct credentials" });
      }
       

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare){
        success = false
        return res
          .status(400)
          .send({ success:success, error: "Please enter a correct credentials" });
      }
        
      const data = {
        user: {
          id: user.id,
        },
      };

      const JWTtoken = jwt.sign(data, secreat_key);
      success = true
      res.json({ status: 200, success:success, message: "Login successfully", token: JWTtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ success:success, error: "Bad request" });
    }
  }
);

//fetch logged-in user data using POST method: "/api/v1/auth/profile".
router.get("/profile", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.status(200).send(user);
  } catch (e) {
    console.error(e.message);
    success = false
    res.status(500).send({ success:success, error: "Bad request" });
  }
});

module.exports = router;

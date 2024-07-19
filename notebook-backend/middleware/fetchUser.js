const jwt = require("jsonwebtoken");

const secreat_key = "x6mz3TiWZSXAbN1K7R1aya";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, secreat_key);
    req.user = data.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;

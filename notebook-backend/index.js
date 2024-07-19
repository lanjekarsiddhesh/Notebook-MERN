const MongoDB = require("./db");
const express = require('express');


MongoDB()

const app = express()
const port = 3000

app.use(express.json())
app.use("/api/v1/auth",require("./routes/auth"))
app.use("/api/v1/notes",require("./routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
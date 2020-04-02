const express = require("express");
require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
var multer = require("multer");
const { getAll } = require("./routes/auth");

dotenv.config();
app.get("/api/getall/:username", getAll);

app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});

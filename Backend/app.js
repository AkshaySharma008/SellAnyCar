const express = require("express");
require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
var multer = require("multer");
const frontend = "./frontend/dist/frontend";
const { login } = require("./routes/auth");
const { getCars } = require("./routes/getCars");

dotenv.config();
app.get("/api/login", login);
app.get("/api/getcars", getCars);

app.get("*.*", express.static(frontend));
app.all("*", (req, res) => {
  res.status(200).sendFile("/", { root: frontend });
});

app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});

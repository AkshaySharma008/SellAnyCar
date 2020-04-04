const express = require("express");
require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const frontend = "./finalBuild";
const { login } = require("./routes/auth");
const { getCars } = require("./routes/getCars");
const { signup } = require("./routes/signup");
const { upload } = require("./routes/upload");
const { payment } = require("./routes/payment");
const { getOrders } = require("./routes/orders");

var multer = require('multer')
const PATH = './finalBuild/assets/images';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {

    cb(null, file.fieldname + '-' + Date.now() + '.jpeg');
  }
});

let uploadImage = multer({
  storage: storage
});

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/api/login", login);
app.post("/api/signup", signup);
app.get("/api/getcars", getCars);
app.post("/api/upload", uploadImage.single('image'), upload);
app.post("/api/payment", payment);
app.post("/api/getOrders", getOrders);


app.get("*.*", express.static(frontend));
app.all("*", (req, res) => {
  res.status(200).sendFile("/", { root: frontend });
});

app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});

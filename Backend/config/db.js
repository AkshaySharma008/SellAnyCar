const dotenv = require("dotenv");
const sql = require("mssql");
dotenv.config();

const dbconfig = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 1433,
  options: {
    enableArithAbort: true
  },
  multipleStatements: true
};

// connect to database
sql.connect(dbconfig, err => {
  if (err) {
    try {
      throw err;
    } catch (err) {
      console.log("database connection error : \n", err.stack);
    }
  } else {
    console.log("Connected to database");
  }
});
db = new sql.Request();

global.db = db;

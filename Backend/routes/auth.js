const sqlstring = require("sqlstring");
const jwt = require("jsonwebtoken");

module.exports = {
  login: (req, res) => {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    let query = `select * from login where email = ${sqlstring.escape(email)} and password=${sqlstring.escape(password)};`;
    try {
      db.query(query, (err, result) => {
        console.log(result);
        if (err) throw err;
        if (result.rowsAffected[0] == 0) {
          res.send({
            success: false
          });
        } else {
          let token = jwt.sign({ email }, process.env.secretKey);
          res.send({
            success: true,
            token,
            email
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.send({
        success: false
      });
    }
  }
};

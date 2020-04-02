const sqlstring = require("sqlstring");
const jwt = require("jsonwebtoken");

module.exports = {
  getAll: (req, res) => {
    let username = req.params.username;
    let query = `select email from login where name = ${sqlstring.escape(
      username
    )}`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send({
          success: true,
          result: result
        });
      });
    } catch (err) {
      console.log(err);
      res.status(404).send({
        success: false
      });
    }
  }
};

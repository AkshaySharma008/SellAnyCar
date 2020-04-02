const sqlstring = require("sqlstring");
const jwt = require("jsonwebtoken");

module.exports = {
  getCars: (req, res) => {
    let query = `select * from cars`;
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

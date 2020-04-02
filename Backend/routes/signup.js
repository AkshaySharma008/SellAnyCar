const sqlstring = require("sqlstring");
module.exports = {
  signup: (req, res) => {
    let query = `insert into login values (${sqlstring.escape(
      req.body.password
    )},${sqlstring.escape(req.body.email)},${sqlstring.escape(
      req.body.phone
    )},${sqlstring.escape(req.body.name)}); `;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        if (result.rowsAffected[0] == 0) res.send({ success: false });
        else {
          res.send({ success: true });
        }
      });
    } catch (err) {
      console.log(err);
      res.send({ success: false });
    }
  }
};

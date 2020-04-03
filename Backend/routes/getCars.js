const sqlstring = require("sqlstring");
const jwt = require("jsonwebtoken");

module.exports = {
  getCars: (req, res) => {
    let query = `select * from cars`;
    try {
      db.query(query, async (err, result) => {
        if (err) throw err;
        // for (let i = 0; i < result.rowsAffected[0]; i++) {
        //   result.recordset[i].image = await base64_encode(result.recordset[i].image);
        //   result.recordset[i].image = `'${result.recordset[i].image}'`;
        // }
        //console.log(result);
        res.send({
          success: true,
          result: result.recordset
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

var fs = require('fs');

// function to encode file data to base64 encoded string
async function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

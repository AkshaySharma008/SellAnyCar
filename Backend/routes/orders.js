const sqlstring = require('sqlstring');

module.exports = {
    getOrders: (req, res) => {
        let query = `select * from orders where email=${sqlstring.escape(req.body.email)};`;
        db.query(query, (err, result) => {
            if (err) throw err;
            console.log(result.recordset);
            res.send({ result: result.recordset })
        })
    }
}
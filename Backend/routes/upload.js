const sqlstring = require('sqlstring');

module.exports = {
    upload: (req, res) => {
        let image = req.file.path;
        image = './assets/images/' + image;
        let query = `insert into cars (name,model,price,image) values (${sqlstring.escape(req.body.name)},${sqlstring.escape(req.body.model)},${sqlstring.escape(req.body.price)},${sqlstring.escape(image)});`;
        try {
            db.query(query, (err, result) => {
                if (err) throw err;
                if (result.rowsAffected[0] != 0)
                    res.send({ success: true })
                else
                    res.send({ success: false })
            })
        } catch (err) {
            console.log(err);
            res.send({ success: false });
        }
    }
}
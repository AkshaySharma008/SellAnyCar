const sqlstring = require('sqlstring');

module.exports = {
    payment: (req, res) => {
        console.log(req.body);
        let email = req.body.email;
        let cart = req.body.cart;
        let token = req.body.token;
        let amount = req.body.amount;
        let nDate = new Date;
        let date = nDate.getDate();
        let month = nDate.getMonth() + 1;
        let year = nDate.getFullYear();
        date = `${date}-${month}-${year}`;
        let finalQuery = '';
        for (let i = 0; i < cart.length; i++) {
            finalQuery += `insert into orders values (${sqlstring.escape(email)},${sqlstring.escape(token)},${sqlstring.escape(cart[i].price)},${sqlstring.escape(cart[i].name)},${sqlstring.escape(cart[i].model)},${sqlstring.escape(date)});`
        }
        console.log(finalQuery);
        try {
            db.query(finalQuery, (err, result) => {
                if (err) throw err;
                if (result.rowsAffected[0] == 0) throw 'Nothing affected';
                res.send({ success: true });
            })
        } catch (err) {
            console.log(err);
            res.send({ success: false })
        }
    }
}
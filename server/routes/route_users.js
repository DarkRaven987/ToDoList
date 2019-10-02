module.exports = function(app, db) {

    app.get('/users', (req, res) => {
        db.query('SELECT * FROM users', function(error, result, fields){
            if (error) res.send(error);
            res.send(result);
        });
    });

    app.get('/users/auth', (req, res) => {
        let username = req.body.name,
            pass = req.body.pass,
            query = `SELECT * FROM users WHERE user_name = '${username}' AND user_password = '${pass}'`;
        db.query(query, function (error, result, fields) {
            if (error) res.send(error);
            res.send(result);
        });
    });
};
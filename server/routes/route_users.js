module.exports = function(app, db) {

    app.get('/users', (req, res) => {
        db.query('SELECT * FROM users', function(error, result, fields){
            if (error) res.send(error);
            res.send(result);
        });
    });

    app.post('/users/auth', (req, res) => {
        let username = req.body.name,
            hash = req.body.hash,
            query = `SELECT user_id FROM users WHERE user_name = '${username}' AND user_hash = '${hash}'`;

        db.query(query, function (error, result, fields) {
            if (error) res.send(error);
            res.send(result);
        });
    });
};
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

    app.post('/users/register', (req, res) => {
        let username = req.body.name,
          hash = req.body.hash,
          checkQuery = `SELECT user_id FROM users WHERE user_name = '${username}'`,
          query = `INSERT INTO users (user_name, user_hash, user_created, user_updated) VALUES ('${username}', '${hash}', NOW(), NOW())`;


        db.query(checkQuery, function (error, result, fields) {
            if (error) console.log(error);
            if (result.length) {
                res.send("0");
                return;
            }
            db.query(query, function (error, result, fields) {
                if (error) res.send(error);
                res.send("1");
            });
        });
    });
};
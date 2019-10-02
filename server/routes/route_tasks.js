module.exports = function(app, db) {

    app.get('/tasks', (req, res) => {
        let user_id = req.params.id,
            query = `SELECT * FROM tasks WHERE user_id = '${user_id}'`;
        db.query( query, function(error, result, fields){
            if (error) res.send(error);
            res.send(result);
        });
    });
};
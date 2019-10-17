module.exports = function(app, db) {

    app.post('/tasks', (req, res) => {
        let user_id = req.body.user_id,
            query = `SELECT task_title, task_description, task_status FROM tasks WHERE user_id = '${user_id}'`;
        db.query( query, function(error, result, fields){
            if (error) res.send(error);
            res.send(result);
        });
    });
};
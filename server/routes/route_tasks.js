module.exports = function(app, db) {

    app.post('/tasks', (req, res) => {
        let user_id = req.body.user_id,
            query = `SELECT task_id, task_title, task_description, task_status FROM tasks WHERE user_id = '${user_id}'`;
        db.query( query, function(error, result, fields){
            if (error) res.send(error);
            res.send(result);
        });
    });

    app.post('/tasks/add', (req, res) => {
        let {task_title, user_id,} = req.body,
          query = `INSERT INTO tasks (task_title, task_description, task_status, user_id, task_created_date, task_updated_date) 
          VALUES ('${task_title}', 'test', 'neutral', '${user_id}', NOW(), NOW())`,
          newTaskIndexQ = `SELECT task_id, task_title, task_description, task_status FROM tasks WHERE user_id = '${user_id}'`;

        db.query( query, function(error, result, fields){
            if (error) res.send(error);
        });

        db.query( newTaskIndexQ, function(error, result, fields){
            if (error) res.send(error);
            res.send(result[result.length-1]);
        });
    });
};
const express        = require('express');
const mysql          = require("mysql2");
const bodyParser     = require('body-parser');
const db             = require('./config');
const app            = express();
const port           = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: db.host,
    user: db.user,
    database: db.database,
    password: db.password
});

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }

    require('./routes');

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});

const express        = require('express');
const mysql          = require("mysql2");
const bodyParser     = require('body-parser');
const db             = require('./config');
const app            = express();
const port           = 7777;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//DB CONNECTION INSTALL
const connection = mysql.createConnection({
    host: db.host,
    port: db.port,
    user: db.user,
    database: db.db_name,
    password: db.password
});

//DB CONNECT
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }

    require('./routes')(app, connection);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});
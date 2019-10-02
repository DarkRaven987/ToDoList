module.exports = function(app, db) {

    app.post('/users', (req, res) => {
        console.log(req.body);
        res.send("POST NEW USER");
    });

    app.get('/', (req, res) => {
        res.send("Home page server respond");
    });
};
const noteRoutes = require('./route_notes');

module.exports = function(app, db) {
    noteRoutes(app, db);

};
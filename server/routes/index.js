const usersRoutes = require('./route_users'),
      tasksRoutes = require('./route_tasks');

module.exports = function(app, db) {
    usersRoutes(app, db);
    tasksRoutes(app, db);
};
// Initializes the `genres` service on path `/genres`
const { Genres } = require('./genres.class');
const createModel = require('../../models/genres.model');
const hooks = require('./genres.hooks');

module.exports = function(app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/genres', (req, res, next) => {
        console.log("IP Address", req.ip);
        console.log("IP Address", req.connection.remoteAddress);
    }, new Genres(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('genres');

    service.hooks(hooks);
};
// Initializes the `rental` service on path `/rental`
const { Rental } = require('./rental.class');
const createModel = require('../../models/rental.model');
const hooks = require('./rental.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/rental', new Rental(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rental');

  service.hooks(hooks);
};

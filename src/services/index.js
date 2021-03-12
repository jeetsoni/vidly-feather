const users = require('./users/users.service.js');
const genres = require('./genres/genres.service.js');
const customer = require('./customer/customer.service.js');
const movie = require('./movie/movie.service.js');
const rental = require('./rental/rental.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
    app.configure(users);
    app.configure(genres);
    app.configure(customer);
    app.configure(movie);
    app.configure(rental);
};
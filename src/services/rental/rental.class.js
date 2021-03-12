const { Service } = require('feathers-mongoose');

exports.Rental = class Rental extends Service {
    constructor(options, app) {
        super(options, app);
        this.app = app;
    }
    async create(data, params) {

        const rental = await super.create(data, params)
        const { movies } = rental;
        movies.forEach(async(movieObj) => {
            await this.app.service('movie').patch(movieObj.movie, { $inc: { numberInStock: -movieObj.count } })
        })
        params.query = { _id: rental._id, $populate: ['customer', 'movies.movie'] }
        const rentals = await super.find(params)

        let dailyRent = 0;

        const moviesArr = rentals.data[0].movies

        moviesArr.forEach(async(movieObj) => {
            dailyRent += movieObj.count * movieObj.movie.dailyRentalRate
        })
        rentals.dailyRent = dailyRent
        return rentals
    }

};
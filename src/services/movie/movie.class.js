const { Service } = require('feathers-mongoose');

exports.Movie = class Movie extends Service {


    create(data, params) {
        console.log(data);
        return super.create(data, params)
    }

    // find(params) {
    //     console.log("object");
    //     params.query = { isDeleted: false, $populate: ['genre'] }
    //     return super.find(params)
    // }

    // get(id, params) {
    //     params.query = { isDeleted: false, $populate: ['genre'] }
    //     return super.get(id, params)
    // }

    update(id, data, params) {
        params.query = { isDeleted: false }
        return super.patch(id, data, params)
    }
    remove(id, params) {
        return super.patch(id, { isDeleted: true }, params)
    }
};
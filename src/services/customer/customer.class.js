const { Service } = require('feathers-mongoose');

exports.Customer = class Customer extends Service {
    create(data, params) {
        return super.create(data, params)
    }

    find(params) {
        params.query = { isDeleted: false }
        return super.find(params)
    }

    get(id, params) {
        params.query = { isDeleted: false }
        return super.get(id, params)
    }

    update(id, data, params) {
        params.query = { isDeleted: false }
        return super.patch(id, data, params)
    }

    remove(id, params) {
        return super.patch(id, { isDeleted: true }, params)
    }
};
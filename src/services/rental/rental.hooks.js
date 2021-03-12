const { authenticate } = require('@feathersjs/authentication').hooks;
const {
    beginTransaction,
    commitTransaction,
    rollbackTransaction
} = require('feathers-mongoose/lib/transaction-manager')

module.exports = {
    before: {
        all: [authenticate('jwt'), beginTransaction],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    after: {
        all: [commitTransaction],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [rollbackTransaction],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};
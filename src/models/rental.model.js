// rental-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
    const modelName = 'rental';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const schema = new Schema({
        customer: {
            type: mongooseClient.Schema.Types.ObjectId,
            ref: 'customer'
        },
        movies: [{
            movie: {
                type: mongooseClient.Schema.Types.ObjectId,
                ref: 'movie',
            },
            count: { type: Number, default: 1 }
        }],
        isDeleted: { type: Boolean, default: false }
    }, {
        timestamps: true
    });

    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);

};
// movie-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
    const modelName = 'movie';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const schema = new Schema({
        title: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        genre: {
            type: mongooseClient.Schema.Types.ObjectId,
            ref: 'genres'
        },
        numberInStock: {
            type: Number,
            default: 0
        },
        dailyRentalRate: {
            type: Number,
            default: 0
        },
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
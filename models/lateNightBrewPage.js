const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;


const lateNightBrewSchema = new Schema({
    title: {
        name: String,
        required: [true, 'Name is required']
    },
    snippet: {
        type: String,
        required: [true, 'Snippet is required']
        },
        imageURL: {
        type: String,
        required: true
        }
        });

    const LateNightBrew = Mongoose.model('LateNightBrew', lateNightBrewSchema);

    module.exports = LateNightBrew;
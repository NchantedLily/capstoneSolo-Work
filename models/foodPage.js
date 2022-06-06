const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    title:{
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

const Food = mongoose.model('Foods', foodSchema);

module.exports = Food;

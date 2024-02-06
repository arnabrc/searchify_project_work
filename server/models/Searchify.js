const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let SearchifyData = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
}, {
    collection: 'searchify_data'
});

module.exports = mongoose.model('SearchifyData', SearchifyData);
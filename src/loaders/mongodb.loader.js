const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

module.exports = () => {
    console.log('Connecting to MongoDB...');
    mongoose.connect(uri, {});
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
}
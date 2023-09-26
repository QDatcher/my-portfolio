const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://10.10.10.136:27017/my-portfolio');

module.exports = mongoose.connection;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://quentindatcher:B4ckw00d1324%24@cluster0.brq1qp5.mongodb.net/my-portfolio');

module.exports = mongoose.connection;

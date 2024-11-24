const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect('mongodb://localhost/expenseTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection failed: ', err));
};

module.exports = connectDB;

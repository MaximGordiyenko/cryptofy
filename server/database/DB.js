const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log('connect to DB', !!response.connections);
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
  }
};

module.exports = connectDB;
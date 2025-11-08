const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {}); // Connect to the MongoDB database using the MONGO_URI from the .env file

    console.log(
      `MongoDB Connection Successful: ${conn.connection.host}`
    );
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

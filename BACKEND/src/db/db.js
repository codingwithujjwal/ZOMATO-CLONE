const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_DB_URL)

    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = connectDB;

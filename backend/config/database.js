const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", true); // 🔥 removes warning

    const data = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected with server: ${data.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
const mongoose = require("mongoose");

module.exports = async () => {
  try {

    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.URI);
    console.log("Database connected");
  } catch (error) {
    console.log("error connecting to Database", error.message);
    process.exit(1);
  }
};

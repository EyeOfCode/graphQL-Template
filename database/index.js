const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = async () => {
  const dbOptions = {
    user: process.env.MONGODB_USER || "",
    pass: process.env.MONGODB_PASS || "",
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    authSource: "admin",
  };

  const DB = process.env.DB_NAME;
  const URI = `${process.env.MONGODB_URI}/${DB}`;

  mongoose.connect(URI, dbOptions);

  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }

  mongoose.connection.on("error", (error) => {
    console.log(`mongodb connection error: ${error.message}`);
  });
  mongoose.connection.once("open", () => {
    // open model
  });
};

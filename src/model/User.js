const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nameSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    index: true,
  },
  password: String,
});

const User = mongoose.model("users", nameSchema);

module.exports = User;

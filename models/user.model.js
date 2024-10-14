const mongoose = require("mongoose");

const dbname = beyondBagDB;
mongoose.connect(`mongoose://127.0.0.1:27017/${dbname}`);

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("user", userSchema);

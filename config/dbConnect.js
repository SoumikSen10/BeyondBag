const { default: mongoose } = require("mongoose");

const dbname = "beyondBagDB";
mongoose
  .connect(`mongodb://127.0.0.1:27017/${dbname}`)
  .then(() => {
    console.log("Connection established!");
  })
  .catch((err) => {
    console.log(`ERROR:${err}`);
  });

module.exports = mongoose.connection;

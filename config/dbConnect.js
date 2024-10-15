const mongoose = require("mongoose");
const config = require("config");

const debug = require("debug")("development:mongoose");

const dbname = "beyondBagDB";
mongoose
  .connect(`${config.get("MONGODB_URI")}/${dbname}`)
  .then(() => {
    debug("Connection established!");
  })
  .catch((err) => {
    debug(`ERROR:${err}`);
  });

module.exports = mongoose.connection;

/*

Go to terminal and run the command :-

set DEBUG=development:*

After that debugger starts. Hence we donot need to use console.log() for debugging much and can push this code directly.

Also to stop the debugger, go to the terminal and run the command :-

set DEBUG=

and debugger gets removed

*/

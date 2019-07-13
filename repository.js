const mongoose = require("mongoose"); 
const MONGO_URL = "mongodb://localhost:27017/chelp"

function connect () {
mongoose.connect(MONGO_URL, 
  {useNewUrlParser: true},
  function (error) {
    if(error) {
      console.log("deu erro ", error)
    } else {
      console.log("deu certo")
    }
  }
  );
}

module.exports = { connect }
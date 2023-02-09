const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/LoginInfo');
  console.log("we are connected Baby !");
}

const loginschema = new mongoose.Schema({
    name:String,
    password:String
})

const user = mongoose.model("user",loginschema)

module.exports=user;
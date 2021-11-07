const mgdb = require("mongoose");
const userSchema = new mgdb.Schema(
{
    full_name:{
    type:String,
    trim:true,
    require:true
    },
    address:String,
    phone:String
});
mgdb.model("Users", userSchema);
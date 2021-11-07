const mgdb = require("mongoose");
const express = require("express");

const db = require("../database/db");
    users = require("../database/users");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.route("/")
    .get(function(req, resp){
        mgdb.model("Users").find({}, (err, users)=>{
            if(err) throw err;
            resp.json(users);
        })
    })
    .post((req, resp)=>{
        let full_name = req.body.full_name;
        let phone = req.body.phone;
        let address = req.body.address;
        let mail = req.body.email;

        mgdb.model("Users").create({
            "full_name":full_name,
            "phone":phone,
            "address":address,
            "mail":mail
        }, (err, user)=>{
            if(err){
                resp.json({"mensaje":"User does not saved!"});
                console.log("error when save", user)
            }else{
                resp.json(user);
            }
        })
    })
/*router.route(":/id")
    .get()
    .put()
    .delete()
*/
module.exports = router;    
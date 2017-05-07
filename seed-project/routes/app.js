var express = require('express');
var router = express.Router();
var User = require('../models/user');
router.get('/', function (req, res, next) {
    User.find(function(err, doc){
        if(err){
            res.send("Error babe!!!!!!!!");
        }
        res.render('node', {email:doc[1]});
});
});
router.post('/', function (req, res, next){
var email = req.body.email;
var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var password = req.body.password;


var user = new User({
 firstName:firstName,
    lastName:lastName,
    password: password,
    email:email
});

user.save();
res.redirect('/');

});
module.exports = router;

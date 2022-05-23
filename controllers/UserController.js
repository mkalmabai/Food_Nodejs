const UserModel = require('../models/UserModel')

const bcrypt = require("bcrypt");
const {hash} = require("bcrypt");

exports.register = async (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        const newUser = new UserModel({
            email: req.body.username,
            password: hash,
            name: req.body.name
        });
        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                return res.redirect('/submit');

            }
        });
    })
};

exports.login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    UserModel.findOne({email: username}, function(err, foundUser){
        if (err) {
            res.send("404")
        } else {
            if (foundUser) {
                bcrypt.compare(password,foundUser.password, function(err, result) {
                if (result===true) {
                    return res.redirect('/home');
                } else {
                    res.send("password duris emes")
                }
                });
            }
        }
    });
};
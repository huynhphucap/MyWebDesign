const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User.js")
users.use(cors())

process.env.SECRET_KEY = 'secret'

// REGISTER
users.post('/register', (req,res) =>{
    const today = new Date();
    const userData = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
        created: today
    }
    User.findOne({
        where: {
            email: req.body.email

        }
    })
        .then(user => {
            if(!user){
                const hash = bcrypt.hashSync(userData.password, 10)
                userData.password = hash
                User.create(userData)
                .then(user =>{
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.json({ token: token})
                })
                .catch(err =>{
                    res.send('error: ' + error)
                })
            }else{
                res.json({ error: 'User exists'})
            }
        })
        .catch(err =>{
            res.send('error: ' + error)
        })
})

module.exports =users
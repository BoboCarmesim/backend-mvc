const userModel = require("../models/userModel")

const getAllUsers = (req, res) => {
    const users = userModel.findAll()

   return res.send(users)
}

const createUser = (req,res) =>{
     const { name, age } = req.body
    
    //const name = req.body.name
    
    //const newUser = {
    // name:name,
    // age:age
    //}

    const newUser = {
        id : Date.now(),
        name,
        age
    }

    const createdUser = userModel.create(newUser)
    
    res.status(201).json(createdUser)
}

module.exports = {
    getAllUsers,
    createUser
}
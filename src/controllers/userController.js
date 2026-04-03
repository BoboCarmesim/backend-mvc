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

const getUserById = (req, res) =>{
    const id = req.params.id

    const user = userModel.findById(id)

    if ( !user ) {
        res.status(404).json({
            message: "Usuário não encontrado."
        })
    }

    return res.json(user)
}

const updateUser = (req, res) => {
    const {id} = req.params

    const {
        name,
        age
    } = req.body

    const userToUpdate = {
        name: name,
        age: age
    }

   const updatedUser = userModel.update(id, userToUpdate)
    
    if ( !updatedUser ) {
        res.status(404).json({
            message: "Usuário não encontrado."
        })
    }

   return res.json(updatedUser)
}

const deleteUser = (req, res) =>{
    const id = Number(req.params.id) 

    const user = userModel.remove(id)

       if ( !user ) {
        res.status(404).json({
            message: "Usuário não encontrado."
        })
    }

   return res.json(user)
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}
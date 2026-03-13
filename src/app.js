const { response } = require('express')
const express = require('express')
const userController = require("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("Olá mundo.")
})

app.get("/users",userController.getAllUsers )

module.exports = app
const { response } = require('express')
const express = require('express')

const app = express()

app.get("/", (request, response) => {
    response.send("Olá mundo.")
})

app.get("/users", (req, res) => {
    res.send([
        {
            "id" : 1,
            "name" : "joao",
            "idade" : 25
        },
          {
            "id" : 2,
            "name" : "Rodrigo",
            "idade" : 26
        }
    ])
})

module.exports = app
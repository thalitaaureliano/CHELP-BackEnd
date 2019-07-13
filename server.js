const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const controller = require("./controller")


server.use(cors())
server.use(bodyParser.json())

server.get('/voluntarias', (req, res) => {
    controller.getAll()
      .then(voluntarias => {
          res.send(voluntarias)
        })
      .catch(error => {
          console.log(error)})
  })

server.post('/voluntarias', (req, res) => {
    controller.add(req.body)
    .then(voluntarias => {
        res.send(voluntarias)
    })
    .catch(error => console.log(error))
    
})

server.listen(5000, () => {
    console.log('Server rodando na porta ', 5000)
  })
  
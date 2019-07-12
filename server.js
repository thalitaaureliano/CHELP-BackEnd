const express = require('express')
const server = express()



app.post('/voluntarias', bodyParser.json(), (req, res) => {
    res.send(voluntarias.add(req.token, req.body))

})

server.listen(5001, () => {
    console.log('Server listening on port 5001, Ctrl+C to stop', 5001)
  })
  
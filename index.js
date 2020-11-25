const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Spongebob frames!')
})

app.get('/frame/:id', (req, res) => {
    res.send('frame id: ' + req.params.id)
})

app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1/${port}`)
})

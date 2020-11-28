const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Spongebob frames!')
})

app.get('/frame/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1/${port}`)
})

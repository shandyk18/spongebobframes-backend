let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./database/db');

const port = 5000;
const frameRoute = require('../server/routes/frame.routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

mongoose.Promise = global.Promise
mongoose.connect(database.db, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log('Database connected successfully!')
},
  error => {
	console.log('Database could not be connected: ' + error)
  }
)

app.get('/', (req, res) => {
  res.send('Spongebob frames!')
})

app.get('/frame/:id', (req, res) => {
	res.send(req.params.id)
})

app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1/${port}`)
})

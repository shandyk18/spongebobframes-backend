const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const frameRoute = require('./routes/frame.routes')

// Routes

app.get('/', (req, res) => {
	res.send('Spongebob frames!')
});

app.use('/frames', frameRoute);

// Connect to DB

mongoose.connect(process.env.DB_CONNECTION, 
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
	console.log('Connected to DB!')
});

// Listen

app.listen(port, () => {
	console.log(`Listening at port ${port}`)
});

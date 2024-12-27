const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db');
const userRoute = require('./routes/user.route');
const captainRoute = require('./routes/captain.route');
const mapRoute = require('./routes/maps.route');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoute);
app.use('/captains', captainRoute);
app.use('/maps', mapRoute);

module.exports = app;   
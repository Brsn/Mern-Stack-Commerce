const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
//saving user creditentals to cookies
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require('dotenv').config();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connected'));

//routes middleware
app.use(morgan('dev'));
//gets json data from the app body
app.use(bodyParser.json());
app.use(cookieParser());


//app.use(userRoutes);
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`App is running on ${port}`);
});


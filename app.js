const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require('dotenv').config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connected'));

//routes middleware
app.use(userRoutes);

const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`App is running on ${port}`);
});


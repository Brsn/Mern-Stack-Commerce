const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(console.log("Connected"))
    .catch(error => handleError(error));

app.use();

const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`App is running on ${port}`);
});


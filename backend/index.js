require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');

// Routes
const exampleRoute = require('./routes/example');

//Mongoose
const db = process.env.MONGODB_URI

mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('DB CONNECTS SUCCESSFULLY');
    })
    .catch((error) => {
        console.error('DB GOT CRASH');
    });

// Routes used
app.use(exampleRoute);

//Port
app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`));
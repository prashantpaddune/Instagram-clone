require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');

// Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

//Port
const Port = process.env.PORT;

//Mongoose
const db = process.env.MONGODB_URI;

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
app.use(express.json())
app.use(authRoute);
app.use(postRoute);

//Port
app.listen(Port, () => console.log(`App listening at http://localhost:${Port}`));
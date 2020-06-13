require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const config = require('./dev');

// Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const userRoute = require('./routes/user');

mongoose.connect(config.DB_URI, {
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
app.use(userRoute);

//Port
app.listen(config.PORT, () => console.log(`App listening at http://localhost:${config.PORT}`));
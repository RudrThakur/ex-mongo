if (process.NODE_ENV != 'production') require('dotenv').config();
const expressPort = process.env.EXPRESS_PORT;

const initMongoDB = require('./src/loaders/mongodb.loader');
initMongoDB();

const express = require('express');
const app = express();
const port = expressPort;

const initExpress = require('./src/loaders/express.loader');
initExpress(app);

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Server listening at port ${port}`);
    console.log('Call / to check if it works !');
});
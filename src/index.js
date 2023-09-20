const express = require("express");
const bodyParser = require("body-parser");
const { City } = require('./models/index');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
        // console.log(db.city);
    });
}

setupAndStartServer();
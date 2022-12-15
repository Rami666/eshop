const express = require('express');

require('dotenv').config();


const app = express();

const dbConnect = require('./config/db');
dbConnect();

app.use('/users', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    res.send("Hello World asd");
    })

const port = process.env.PORT || 5000 ;

app.listen(port, () => {
    console.log("Server is running on port: " + port);
})




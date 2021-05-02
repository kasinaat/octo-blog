var express = require('express');
var db = require('./util/connectDB');
require('dotenv').config();
const path = require('path');
const GLOBAL = require('../global');
const userRouter = require('./app/routes/user');

const app = express();

const port = process.env.PORT || 5000;

db.connect(process.env.db_pass);

app.listen(port, ()=>{
    console.log(`Octo-Blog started in port ${port}`);
});

app.use(express.static(GLOBAL.clientPath));
app.use(express.json());

app.use('/api/users', userRouter);


module.exports.app = app;
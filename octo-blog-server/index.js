var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var GLOBAL = require('../global')
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`Octo-Blog started in port ${port}`);
});

app.use(express.static(GLOBAL.clientPath));
app.get('/', function(req, res){
    res.sendFile(GLOBAL.clientIndexPath);
});
module.exports = app;
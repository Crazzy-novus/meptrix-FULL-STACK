var express = require('express');
var server = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://duraivignesh:1234@meptrix.cm65kmf.mongodb.net/', {useNewUrlParser: true, useUnifiedTopology: true}, function checkDB (error) {
    if (error) {
        console.error('Error: ', error);
    }
    else {
        console.log('DB connected !!!!!!!!!!!!!!!');
    }
});

server.use(express.json());

server.listen(3000, function check (error) {
    if (error) {
        console.error('Error: ', error);
    }
    else {
        console.log('Server is listening at http://localhost:3000');
    }
});


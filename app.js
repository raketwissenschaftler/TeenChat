/**
 * Created by Rick on 28-2-2016.
 */
var express = require('express');
var app = express();
app.use(express.static('static'));

app.get('/', function(req, res){
    res.send('Hello /r/teendeveloper');
});

app.listen(5000, function(){
    console.log('TeenChat running on port 5000');
});
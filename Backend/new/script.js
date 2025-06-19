import express from 'express';

const app = express();


app.get('/', function(req, res){

    res.send("Hi there");

})

app.listen(3000);
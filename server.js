/**
 * Created by Kayvon Rahimi on 3-5-2017.
 */
var http = require('http');
var express = require ('express');
var PORT = 8080;

var app = express();

app.get( '*' , function(req, res, next){
    //example = GET + /hi, POST + /about
   console.log(  req.method + " " + req.url );
   next();
});

app.get('/hi', function(request, response){
   response.send('The server has noticed you.');
});

app.get('/about', function(request, response){
    response.send('This project serves as practice for programming classes.');
});

app.listen( PORT, function(){
    console.log('App is listening on PORT ' + PORT)
});
var cookieParser = require('cookie-parser');
var session = require('express-session');
var express = require('express');
var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   res.cookie('name', 'express').send('cookie set'); //Sets name = express
   if(req.session.page_views){
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
 } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
 }
});

app.listen(3000);
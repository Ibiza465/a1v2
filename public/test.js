var express = require("express");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;
app.use(express.static('code'))

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}


app.get("/", function(req,res){
    res.send("Blog Page<br /><a href='/Blog'>Go to the Blog page</a>");
});

app.use(express.static('public'))


app.get("/blog", function(req,res){
    res.sendFile(path.join(__dirname,"public/blog.html"));
  });

  app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"public/login.html"));
  });

  app.get("/article", function(req,res){
    res.sendFile(path.join(__dirname,"public/article.html"));
  });
  app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"public/register.html"));
  });

app.listen(HTTP_PORT, onHttpStart);
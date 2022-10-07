var express = require("express");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;
app.use(express.static('code'))
// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.send("Blog Page<br /><a href='/Blog'>Go to the Blog page</a>");
});


app.get("/blog", function(req,res){
    res.sendFile(path.join(__dirname,"/blog.html"));
  });

  app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/login.html"));
  });

  app.get("/article", function(req,res){
    res.sendFile(path.join(__dirname,"/article.html"));
  });
  app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"/register.html"));
  });



// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
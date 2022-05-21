var express = require("express");
 
 //use the application off of express.
 var app = express();
 
 //define the route for "/"
 app.get("/", function (request, response){
     response.sendFile(__dirname+"/views/index.html");
 });
 
 app.get("/getaccount", function (request, response){
     var username = request.query.username;
     var password = request.query.password
     if (username != "" && password !="") {
         response.send("Welcome " + username);
     } 
     else if (username != "" && password =="") {
         response.send("Please enter a password");
     } 
     else if (password !="" && username ==""){
         response.send("Please enter a username");
     }
     else{
        response.send("Please enter a username and password")
     }

 });
 
 //start the server
 app.listen(8080);
 
 console.log("Something awesome to happen at http://localhost:8080");

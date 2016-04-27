/*
Here are the specific user stories you should implement for this project:

User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.
*/
var express = require ('express');
var app = express();
var url = require('url');
var urlParse;
app.listen(process.env.PORT || 8080, ()=>{console.log("Server listening on ", process.env.PORT || 8080); });

app.get('/time/:queryString', (req,res)=>{
urlParse = url.parse(req.url,true);
res.json(urlParse);
res.end(req.params.queryString);

});



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
var nattylangDate = new RegExp('([a-z]{3,9}\\s\\d{1,2}[,]\\s\\d{4})','gi');
var unixDate = new RegExp('(\\d{1,14})','g');
var tmpObj ={};
app.listen(process.env.PORT || 8080, ()=>{console.log("Server listening on ", process.env.PORT || 8080); });

app.get('/:queryString', (req,res)=>{

urlParse = url.parse(req.url,true);
var queryString = req.params.queryString.toString();

if (queryString.search(nattylangDate) >= 0) {
tmpObj.unix = Date.parse(queryString);
tmpObj.natural = queryString;
res.json(tmpObj);
tmpObj ={};
}
// the unix date regexp is picking up partial matches e.x 23939203909sdkasdlk which shouldn't be happening
else if (+queryString.search(unixDate) >= 0) {
var dateObj = new Date(+queryString);
tmpObj.unix = +queryString;
tmpObj.natural = dateObj.toLocaleString('en-us',{month:'long'})+" "+dateObj.getDate()+", "+dateObj.getFullYear();
res.json(tmpObj);
tmpObj = {};

}

  else {
    tmpObj.unix = null;
    tmpObj.natural = null;
    res.json(tmpObj);
    tmpObj = {};
  }


});



const express = require('express');
const app = express();

app.get('/', function (req, res){
    console.log(req);
})


app.listen(5005, () => { 
    console.log("server started on port 5005 !!");
})
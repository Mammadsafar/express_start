const express = require('express');
const app = express();
const things = require('./routes/things');





app.use("/",function (req, res, next){
    // console.log(req);
    // res.send(req.url + " " + req.method)
    console.log(1);
    // res.json({
    //     url: req.url,
    //     method: req.method
    // })
    req.test = "test";
    next();
});


app.get('/', function (req, res){
    // console.log(req);
    console.log(2 , req.test);
        res.json({
        url: req.url,
        method: req.method
    })
});

app.use('/things', things)


// app.get('/a', function (req, res){
//     // console.log(req);
//         console.log(3);
//         res.json({
//         url: req.url,
//         method: req.method
//     })
// });
// app.get('/b', function (req, res){
//     // console.log(req);
//         console.log(4);
//         res.json({
//         url: req.url,
//         method: req.method
//     })
// });

app.listen(5005, () => { 
    console.log("server started on port 5005 !!");
});
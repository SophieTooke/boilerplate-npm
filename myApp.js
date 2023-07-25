let express = require('express');
let app = express();

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// })

let __pages = '/views/'

app.get("/", function(req, res) {
    res.send(__pages + 'index.html');
})



































 module.exports = app;

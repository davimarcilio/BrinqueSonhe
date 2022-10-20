const express = require('express');
const app = express();
port = 8080;
app.set('view engine', 'ejs');
app.get('/', function (req, res, next) {
    res.render('index');
})
app.listen(port, () => {
    console.log('listening on port ' + port);
})
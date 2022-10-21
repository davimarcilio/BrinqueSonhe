const express = require('express');
const app = express();
const path = require('path');
const CSSRoutes = require('./routes/CSSRoutes');
port = 8080;
app.set('view engine', 'ejs');
app.get('/', function (req, res, next) {
    res.render('index');
})
app.get('/img/logo', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'views/img/picwish.png'));
});
app.get('/fonts/logofont', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'views/fonts/BaksoSapi.otf'));
})
// app.get('/css', function (req, res, next) {
//     res.sendFile(path.join(__dirname, 'views/styles/style.css'));
// })
app.use('/css', CSSRoutes);
app.listen(port, () => {
    console.log('listening on port ' + port);
})
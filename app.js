const express = require('express');
const app = express();
const path = require('path');
const cssRoutes = require('./routes/cssRoutes');
const jsRoutes = require('./routes/jsRoutes');
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
app.use('/css', cssRoutes);
app.use('/js', jsRoutes);
app.listen(port, () => {
    console.log('listening on port ' + port);
})
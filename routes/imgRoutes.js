const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/homeimg', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/imgs/homeimage.png'));
})
router.get('/logo', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/imgs/picwish.png'));
});
module.exports = router;
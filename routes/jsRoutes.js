const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/ABJA', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/scripts/animatedBackground-CanvasAnimation.js'));
});
router.get('/fadeAnimjs', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/scripts/fadeAnimation.js'));
})
module.exports = router;
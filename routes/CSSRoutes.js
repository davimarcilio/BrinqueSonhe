const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/indexcss', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/styles/style.css'));
})
router.get('/ABCA', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/styles/animatedBackgrounds-CanvasAnimation.css'));
})
router.get('/fadeAnimcss', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/styles/fadeAnimation.css'));
})

module.exports = router;
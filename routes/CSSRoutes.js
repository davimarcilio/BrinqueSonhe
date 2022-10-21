const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/indexcss', function (req, res) {
    console.log(rootpaste);
    res.sendFile(path.join(rootpaste, 'views/styles/style.css'));
})
router.get('/ABCA', function (req, res) {
    res.sendFile(path.join(rootpaste, 'views/styles/AnimatedBackgrounds-CanvasAnimation.css'));
})
module.exports = router;
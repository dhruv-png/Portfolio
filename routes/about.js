const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('about', {title: 'This is the About Me Section'});
});

module.exports = router;
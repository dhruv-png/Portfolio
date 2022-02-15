const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('about', {title: 'This is the Projects Section'});
});

module.exports = router;
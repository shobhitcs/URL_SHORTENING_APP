const express = require('express');
const { addurl,geturl }=require('../controllers/urlController');
const router=express.Router();

router.post('/url',addurl );
router.get('/:id',geturl );

module.exports = router;
const post = require('./post');
const express = require('express');

module.exports = (function(pool){
    console.log('result...');
    console.log(post);
    'use strict';
    var router = express.Router();
    router.get('/:id', async function(req, res){
        let result = await post.retrieveOne(req.params.id);
        console.log(result);
        res.json(result);
    });
    
    router.post('/', function(req, res){
        res.json(post.insert(req.body));
    });
    return router;
})();

const pool = require('../database/database.js');
const post = require('../database/models/post/index.js');

const express = require('express');
const app = express();

app.use(express.json());
app.use('/post', post);

app.listen(3000);
console.log('listening on port 3000');
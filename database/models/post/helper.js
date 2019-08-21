const pool = require('../../database.js');

exports.insertPost = async function(data) {
    let data = req.body;
    const userQuery = 'SELECT id, displayname, portraitSrc FROM user WHERE Id ="' + data.userId + '"';
    let userData = await newQuery(pool, userQuery);
    if (userData == null) {
        throw new Error('No user found with Id ' + data.userId);
    }
    var insertQuery = `
        INSERT INTO post (createdById, createddate, imgSrc, description)
        VALUES ("${data.userId}", NOW(), "${data.imgSrc}", "${data.description}")
    `;
    let result;
    try {
        result = await pool.query(insertQuery);
    } catch (err) {
        console.error('Could not Query Database: ' + err.stack);
        return;
    }
    return result;
}

exports.retrieveOnePost = async function(id) {
    const postQuery = `
        SELECT post.id, post.createdById, post.createddate, post.imgsrc, post.description, user.displayname, user.portraitSrc
        FROM post INNER JOIN user ON user.id = post.createdById
        WHERE post.id = ${id}
    `;
    let result;
    try {
        result = await pool.query(postQuery);
    } catch (err) {
        console.error('Could not Query Database: ' + err.stack);
        return;
    }
    console.log('finished');
    return result;
}
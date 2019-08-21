const helper = require('./helper.js')
module.exports = (function() {
    var post = {}
    post.insert = function(data){
        helper.insertPost(data).then(function(result){
            return result;
        });
    }
    
    post.retrieveOne = async function(id) {
        let result = await helper.retrieveOnePost(id);
        return result;
    }
    return post;
})();
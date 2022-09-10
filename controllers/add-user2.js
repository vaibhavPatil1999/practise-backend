const path = require('path')
exports.getController = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'))
}


exports.postController = (req, res, next) => {

     
   
 }

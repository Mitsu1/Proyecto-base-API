const Messages = require('./messages')

module.exports = {
    notFound,
    serverError
}

async function notFound(req, res) {

    res.$error(Messages().serverNotFound)
    
}

async function serverError(req, res, next){
    
    res.$error(Messages().serverError)
    
}
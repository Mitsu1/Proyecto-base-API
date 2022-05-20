const Messages = require('./messages')
const Responses = require('./responses')

module.exports = {
    notFound,
    serverError
}

async function notFound(req, res) {

    Responses.$error(Messages().serverNotFound, res)
    
}

async function serverError(error, req, res, next){
    
    Responses.$error(Messages().serverError, res)
  
}
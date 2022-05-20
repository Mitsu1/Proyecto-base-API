const Router = require('express').Router()

Router.get('/', async(req, res) => {

    res.send({
        sucess: true,
        data: {
            message: 'TODO List API'
        }
    })
})

module.exports = [
    Router
]
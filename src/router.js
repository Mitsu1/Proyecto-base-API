const Router = require('express').Router()

Router.get('/', async(req, res) => {
    res.send({
        sucess: true,
        data: {
            message: 'TODO List API'
        }
    })
})

const UsersRouter = require('./users/users.router')

module.exports = [
    Router,
    UsersRouter
]
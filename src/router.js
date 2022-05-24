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
    Router,
    require('./users/users.router'),
    require('./tasks/tasks.router'),
    require('./subtasks/subtasks.router'),
    require('./sessions/sessions.router')
]
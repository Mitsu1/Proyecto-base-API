const Router = require('express').Router()
const Hub = require('./tasks.hub')

Router.post('/tasks', Hub.create)

Router.get('/tasks', Hub.gets)

Router.get('/tasks/:taskId', Hub.get)

Router.put('/tasks/:taskId', Hub.update)

Router.delete('/tasks/:taskId', Hub.delete)

module.exports = Router
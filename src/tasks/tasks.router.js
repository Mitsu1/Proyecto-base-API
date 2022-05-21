const Router = require('express').Router()
const Hub = require('./tasks.hub')

Router.post('/tasks', Middlewares.auth, Hub.createTask)

Router.get('/tasks', Middlewares.auth, Hub.getTasks)

Router.get('/tasks/:taskId', Middlewares.auth, Hub.getTask)

Router.put('/tasks/:taskId', Middlewares.auth, Hub.updateTask)

Router.delete('/tasks/:taskId', Middlewares.auth, Hub.deleteTask)

module.exports = Router
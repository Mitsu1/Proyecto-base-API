const Router = require('express').Router()
const Hub = require('./sessions.hub')

Router.get('/sessions', Hub.getSessions)

Router.get('/sessions/:sessionId', Hub.getSession)

module.exports = Router
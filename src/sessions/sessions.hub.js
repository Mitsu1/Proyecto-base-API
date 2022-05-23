const Fields = require('./sessions.fields')
const Service = require('./sessions.service')

module.exports = {
    getSessions,
    getSession,
}

async function getSessions(req, res) {
    try {

        const query = {
            page: parseInt(req.query.page || 0),
            find: req.query.find
        }

        res.$data(await Service.getSessions(query))

    } catch(error) {
        res.$error(error)
    }
}

async function getSession(req, res) {
    try {

        const sessions = new Sessions(req)

        const data = {
            sessionId: sessions.sessionId.get()
        }

        res.$data(await Service.getSession(data.sessionId))

    } catch(error) {
        res.$error(error)
    }
}

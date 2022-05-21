const validator = require('../validator')

const Fields = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.userId = validator({
        type: 'objectId',
        value: props.userId,
        name: 'identificador'
    })

    return this
}

module.exports = Fields
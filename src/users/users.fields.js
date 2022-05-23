const validator = require('../validator')

const Fields = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.userId = validator({
        type: 'objectId',
        value: props.userId,
        name: 'identificador'
    })

    this.firstName = validator({
        type: 'string',
        value: props.firstName,
        name: 'nombre'
    })

    this.lastName = validator({
        type: 'string',
        value: props.lastName,
        name: 'apellido'
    })

    this.phone = validator({
        type: 'string',
        value: props.phone,
        name:  'telefono',
        size: 10
    })

    this.email = validator({
        type: 'string',
        value: props.email,
        name: 'correo'
    })   
    
    return this
}

module.exports = Fields
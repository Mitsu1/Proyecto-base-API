const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

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

    this.password = validator({
        type: 'string',
        value: props.password,
        name: 'contraseña'
    })
    
    return this
}


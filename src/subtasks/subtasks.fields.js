const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.subtaskId = validator({
        type: 'objectId',
        value: props.subtaskId,
        name: 'identificador'
    })

    this.taskId = validator({
        type: 'objectId',
        value: props.taskId,
        name: 'identificador'
    })

    this.name = validator ({
        type: 'string',
        value: props.name,
        name: 'nombre del curso'
    })
    
    this.status = validator ({
        type: 'boolean',
        value: props.status,
        name: 'estado de la tarea'
    })

    return this
}


const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.taskId = validator({
        type: 'objectId',
        value: props.taskId,
        name: 'identificador'
    })

    this.userId = validator ({
        type: 'ObjectId',
        value: props.userId,
        name: 'identificador del usuario'
    })

    this.name = validator ({
        type: 'string',
        value: props.name,
        name: 'nombre del curso'
    })

    this.date = validator ({
        type: 'date',
        value: props.date,
        name: 'fecha de termino'
    })

    this.description = validator ({
        type: 'string',
        value: props.description,
        name: 'descripcion'
    })

    this.label = validator ({
        type: 'array',
        value: props.label,
        name: 'lista de etiquetas'
    })

    this.status = validator ({
        type: 'boolean',
        value: props.status,
        name: 'estado de la tarea'
    })

    return this
}


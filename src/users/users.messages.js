module.exports = function($details, $message) {
    return {

        userGetError: {
            code: 503,
            key: 'userGetError',
            message: $message || 'Error al obtener al usuario',
            $details
        },

        userSaveError: {
            code: 503,
            key: 'userSaveError',
            message: $message || 'Error al guardar la información del usuario',
            $details
        },

        userDeleteError: {
            code: 503,
            key: 'userDeleteError',
            message: $message || 'Error al borrar la informacion del usuario',
            $details
        },

        userNotFound: {
            code: 404,
            key: 'userNotFound',
            message: $message || 'El usuario no fue encontrado',
            $details
        }
    }
}
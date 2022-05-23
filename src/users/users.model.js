const Model = require('mongoose').model
const Schema = require('mongoose').Schema
const ObjectId = require('mongoose').Types.ObjectId
const Messages = require('./users.messages')

const schema = new Schema ({
    
    status: {
        type: String,
        enum: ['enabled', 'disabled'],
        default: 'enabled'
    },

    name: {
        type: String
    },

    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },
    
    updated: {
        type: Date
    },
    
    created: {
        type: Date,
        default: Date.now
    }
        
})

schema.pre('save', function(next) {    
    this.name = `${ this.firstName } ${ this.lastName}`
    this.updated = new Date()
    next()
})

schema.post('save', function(error, doc, next) {
    if(error) return next( Messages(error).userSaveError )
    next()
})

schema.post('findOne', function(error, doc, next) {
    if(error) return next( Messages(error).userGetError )
    next()
})

schema.post('find', function(error, doc, next) {
    if(error) return next( Messages(error).userGetError )
    next()
})

schema.post('remove', function(error, doc, next) {
    if(error) return next( Messages(error).userDeleteError )
    next()
})

module.exports = Model('Users', schema)
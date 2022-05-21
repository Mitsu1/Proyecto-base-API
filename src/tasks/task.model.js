const Schema = require('mongoose').Schema
const ObjectId = require('mongoose').Types.ObjectId
const Model = require('mongoose').model
const Messages = require('./tasks.messages')

const schema = new Schema({

    created: {
        type: Date,
        default: Date.now
    }
})

schema.pre('save', function(next) {
    next()
})

schema.post('save', function(err, doc, next) {
    if(err) return next(Messages(err).tasksSaveError)
    next()
})

schema.post('remove', function(err, doc, next) {
    if(err) return next(Messages(err).tasksDeleteError)
    next()
})

schema.post('findOne', function(err, doc, next) {
    if(err) return next(Messages(err).tasksGetError)
    next()
})

schema.post('find', function(err, doc, next) {
    if(err) return next(Messages(err).tasksGetError)
    next()
})

module.exports = Model('Tasks', schema)
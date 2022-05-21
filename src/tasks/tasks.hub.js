const { Tasks } = require('../fields')
const Service = require('./tasks.service')
const Methods = require('../methods')

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}

async function createTask(req, res) {
    try {

        const tasks = new Tasks(req)

        const data = {
            
        }

        res.$data(await Service.createTask(data))

    } catch(error) {
        res.$error(error)
    }
}

async function getTasks(req, res) {
    try {

        const tasks = new Tasks(req)

        const data = {

        }

        const query = {
            page: parseInt(req.query.page || 0),
            find: req.query.find
        }

        res.$data(await Service.getTasks(data, query))

    } catch(error) {
        res.$error(error)
    }
}

async function getTask(req, res) {
    try {

        const tasks = new Tasks(req)

        const data = {
            taskId: tasks.taskId.get()
        }

        res.$data(await Service.getTask(data.taskId))

    } catch(error) {
        res.$error(error)
    }
}

async function updateTask(req, res) {
    try {

        const tasks = new Tasks(req)

        let data = {
            taskId: tasks.taskId.get()
        }

        const props = [
        ]

        data = Methods.updateValidation(data, props, req.body, tasks)

        res.$data(await Service.updateTask(data.taskId, data))

    } catch(error) {
        res.$error(error)
    }
}

async function deleteTask(req, res) {
    try {

        const tasks = new Tasks(req)

        const data = {
            taskId: tasks.taskId.get()
        }

        res.$data(await Service.deleteTask(data.taskId))

    } catch(error) {
        res.$error(error)
    }
}
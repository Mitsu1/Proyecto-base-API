const Service = require('./tasks.service')
const Fields = require('./tasks.fields')
const { aggregate } = require('./tasks.model')

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,    
    deleteTask,
    getTaskResume
}

async function createTask(req, res) {
    try {

        const tasks = new Fields(req)

        const data = {
            userId: req.userId,
            name: tasks.name.get(),
            date: tasks.date.get(),
            description: tasks.description.get(),
            label: tasks.label.get()
        }

        res.$data(await Service.createTask(data))

    } catch(error) {
        res.$error(error)
    }
}

async function getTasks(req, res) {
    try {

        const tasks = new Fields(req)

        const query = {
            page: parseInt(req.query.page || 0),
            find: req.query.find,
            label: req.query.label,
        }

        res.$data(await Service.getTasks(query))

    } catch(error) {
        res.$error(error)
    }
}

async function getTask(req, res) {
    try {

        const tasks = new Fields(req)

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

        const tasks = new Fields(req)

        let data = {
            taskId: tasks.taskId.get()
        }

        const fields = [
            'name',
            'date',
            'description',
            'label',
            'status'
        ]

        fields.forEach(field => req.body[field] != undefined && (data[field] = req.body[field]))

        res.$data(await Service.updateTask(data.taskId, data))

    } catch(error) {
        res.$error(error)
    }
}

async function deleteTask(req, res) {
    try {

        const tasks = new Fields(req)

        const data = {
            taskId: tasks.taskId.get()
        }

        res.$data(await Service.deleteTask(data.taskId))

    } catch(error) {
        res.$error(error)
    }
}

async function getTaskResume(req, res) {
    try {

        let data = {
            userId: req.userId
        }

        res.$data(await Service.getTaskResume(data))

    } catch(error) {
        res.$error(error)
    }
}


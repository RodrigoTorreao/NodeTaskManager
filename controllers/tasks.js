const Task = require('../models/tasks')

const getAllTasks = (req, res) => {
    res.send('All itens')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = () => {
    res.send('Get single Task')
}

const updateTask = () => {
    res.send('Update Task')
}

const deleteTask = () => {
    res.send('Delete task')
}



module.exports =  {getAllTasks, createTask, getTask ,updateTask, deleteTask}



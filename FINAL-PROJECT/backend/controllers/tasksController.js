const TasksModel = require("../models/tasksModel")

const addTask = async (request, response) => {
    const { title, description } = request.body
    try {
        const task = await TasksModel.create({ title, description })
        response.status(200).json(task)
    } catch {
        response.status(400).json(error.message)
    }
}

const getAllTasks = async (request, response) => {
    try {
        const tasks = await TasksModel.find().sort({ createdAt: 1 });
        response.status(200).json(tasks);
    } catch (error) {
        response.status(400).json(error.message);
    }
}

const getById = async (request, response) => {
    id = request.params.id
    try {
        const task = await TasksModel.findById(id);
        response.status(200).json(task);
    } catch (error) {
        response.status(400).json(error.message);
    }
}

const deleteTask = async (request, response) => {
    const id = request.params.id
    const task = await TasksModel.deleteOne({ _id: id })
    if (!task) {
        response.status(404).json({ error: "No Such Task" })
    } else {
        response.status(200).json(task)
    }
}

const updateTask = async (request, response) => {
    const id = request.params.id;
    const task = await TasksModel.updateOne({_id: id}, {...request.body})
    if (!task) {
        response.status(404).json({ error: "No Such Task" })
    } else {
        response.status(200).json(task)
    }
}

module.exports = {addTask, getAllTasks, getById, deleteTask, updateTask}
const express = require("express")
const router = express.Router()

const TasksController = require("../controllers/tasksController")

router.get("/", (request, response) => {
    response.json({message: "Welcome to the router"})
})

router.get("/alltasks", TasksController.getAllTasks)

router.get("/task/:id", TasksController.getById)

router.post("/addtask", TasksController.addTask)

router.delete("/deletetask/:id", TasksController.deleteTask)

router.patch("/updatetask/:id", TasksController.updateTask)

router.put("/updatetask/:id", TasksController.updateTask)

module.exports = router
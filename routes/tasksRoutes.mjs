import express from "express";
import TaskController from "../controllers/TaskController.mjs";

const tasksRouter = express.Router();

tasksRouter.get("/add", TaskController.createTasks);
tasksRouter.post("/add", TaskController.createTasksSave);
tasksRouter.post("/remove", TaskController.removeTask);
tasksRouter.get('/edit/:id', TaskController.updateTask)
tasksRouter.post('/edit', TaskController.updateTaskPost)
tasksRouter.post('/updatestatus', TaskController.toggleTaskStatus)
tasksRouter.get("/", TaskController.showTasks);

export default tasksRouter;

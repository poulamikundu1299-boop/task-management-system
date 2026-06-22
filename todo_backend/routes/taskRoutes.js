const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const {
    createTask,
    getTask,
    deleteTask,
    updateTask} = require("../controllers/taskController");

const router = express.Router();

router.post("/",authMiddleware,createTask);

router.get("/",authMiddleware,getTask);

router.delete("/:id",authMiddleware,deleteTask);

router.put("/:id",authMiddleware,updateTask);

module.exports = router;
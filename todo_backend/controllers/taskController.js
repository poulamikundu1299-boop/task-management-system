const task = require("../models/task");

const createTask = async(req,res)=>{
    try{
        const {name,dueDate} = req.body;
        const newTask = new task({
            name,
            userId : req.user.id,
            dueDate
        });
        console.log(dueDate);
        await newTask.save();

        res.status(201).json(newTask);

    }catch(err){

        res.status(500).json({
        message : err.message
        });

    }
};

const getTask = async(req,res)=>{
    try{
        const findTask = await task.find({userId : req.user.id});

    res.status(200).json(findTask);

    }catch(err){
        res.status(500).json({
        message : err.message
        });
    }
};

const deleteTask = async(req,res)=>{
    try{
        const deletedTask = await task.findByIdAndDelete({
            _id : req.params.id,
            userId : req.user.id
        });
        if(!deletedTask){
            return res.status(404).json({
                message : "Task is not found..."
                });;
        }
        res.status(200).json({
        message : "Task deleted..."
        });

    }catch(err){

        res.status(500).json({
        message : err.message
        });

    }
};

const updateTask = async(req,res)=>{
    try{
        const {status} = req.body;

        const updatedTask = await task.findByIdAndUpdate(
            { _id : req.params.id,
            userId : req.user.id
            },
            {status},
            {returnDocument : "after"}
        );
        if(!updatedTask){
            return res.status(404).json({
                message : "Task is not found..."
                });
        }

        res.status(200).json(updatedTask);

    }catch(err){ 

        res.status(500).json({
        message : err.message
        });

    }
};



module.exports = {createTask,getTask,deleteTask,updateTask};
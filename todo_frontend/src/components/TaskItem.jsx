import { useState } from "react";
import API from "../services/api";

function TaskItem({task}){

    const deleteTask = async (id)=>{
        const token = localStorage.getItem("token");

        await API.delete(`/tasks/${id}`,{
            headers : {
                Authorization : token
            }
        });
        alert("Task is deleted...");
    }

    const updateTask = async (id)=>{

        const token = localStorage.getItem("token");

        await API.put(`/tasks/${id}`,
            {
                status : "completed"
            },{
            headers : {
                Authorization : token
                }
            }
        );
        alert("Task is updated...");

    }
    return(
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">

            <h3 className="text-xl font-semibold">
            {task.name}
            </h3>

        <p className="text-gray-500">
        Due: {new Date(task.dueDate).toLocaleDateString("en-GB")}</p>

        <span className={task.status === "completed"
            ? "bg-green-100 text-green-700 px-3 py-1 rounded-full"
            : "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full"
        }
        >{task.status}
        </span>

        <div className="flex gap-2 mt-4">

            <button
                onClick={() => updateTask(task._id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
                Update
            </button>

            <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
                Delete
            </button>

        </div>

    </div>
    );
}
export default TaskItem;
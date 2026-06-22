import { useEffect, useState } from "react";
import API from "../services/api";
import TaskItem from "./TaskItem";

function TaskList(){
    const [tasks,setTasks] = useState([]);

    useEffect(()=>{
        
        const getTask = async ()=>{

            const token = localStorage.getItem("token");

            const res  = await API.get("/tasks",
                {
                    headers : {
                        Authorization : token
                    }
                }
            );
            setTasks(res.data);
        }
        getTask();
    },[]);
    return(
        <>
        {
            tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                    />
                ))
        }
        </>
    );
}
export default TaskList;
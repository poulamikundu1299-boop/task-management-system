import {useState} from "react";
import API from "../services/api";

function TaskForm(){
    const [name,setName] = useState("");
    const [dueDate,setDueDate] = useState("");

    const createTask = async ()=>{

            const token = localStorage.getItem("token");

            await API.post("/tasks",
                {name,
                dueDate
                },
                {
                    headers : {
                        Authorization : token
                    }
                }
            );
            window.location.reload();
            setName("");
            setDueDate("");
    }
    return (
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">

    <input
    type="text"
    placeholder="Enter Task Name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className="
        w-full
        px-5
        py-4
        rounded-xl
        border-0
        bg-white
        shadow-lg
        focus:ring-4
        focus:ring-indigo-400
        outline-none
    "
/>

    <input
        type="date"
        value={dueDate}
        onChange={(e)=>setDueDate(e.target.value)}
        className="w-full border p-3 rounded-lg mb-3"
    />

    <button onClick={createTask}
    className="
        bg-indigo-600
        hover:bg-indigo-700
        text-white
        px-6
        py-4
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        shadow-lg
    "
>
    Add Task
</button>

</div>
    );
}
export default TaskForm;
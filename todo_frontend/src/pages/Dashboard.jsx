import TaskForm from "../components/taskForm";
import TaskList from "../components/taskList";
import {useNavigate} from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();
    const handleLogout = ()=>{

        localStorage.removeItem("token");
        alert("Logged out successfully");

        navigate("/");
    };
    return(
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8">

            <div className="max-w-5xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

                <div className="flex justify-between items-center mb-8">

            <h1 className="text-5xl font-extrabold text-white mb-8">
    Task Manager
        </h1>

            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
                Logout
            </button>

        </div>

        <TaskForm />

        <TaskList />

    </div>

</div>
    );
}
export default Dashboard;
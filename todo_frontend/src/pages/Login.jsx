import {useState} from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import {useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async ()=>{
        try{
            const res = await API.post("/auth/login",{
                email,
                password
            });

            localStorage.setItem(
                "token",
                res.data.token
            );
            console.log(res.data);

            alert("Login Successful...");

            navigate("/dashboard");
        }catch(err){
            console.log(err);
            alert(err.response.data);
        }
    };

    

    return(
        <div className="min-h-screen flex items-center justify-center bg-slate-100">

    <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
            Login
        </h1>

        <input
            className="w-full border p-3 rounded-lg mb-4"
            placeholder="Email"
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded-lg mb-4"
            placeholder="Password"
            type="password"
            value = {password}
            onChange = {(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
            Login
        </button>
        <p className="text-center mt-4 text-gray-600">
    Don't have an account?{" "}
    <Link
        to="/signup"
        className="text-blue-600 font-semibold hover:underline"
    >
        Sign Up
    </Link>
    </p>
    </div>

</div>
    )
}
export default Login;
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import API from "../services/api";

function Signup(){
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignUp = async ()=>{
        try{
            const res = await API.post("/auth/signup",{
                name,
                eamil,
                password
            });

            localStorage.setItem(
                "token",
                res.data.token
            );

            alert("Signup Successful...");
            navigate("/");

        }catch(err){
            alert(err.response.data);
        }
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-slate-100">

    <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
            SignUp
        </h1>

        <input
            className="w-full border p-3 rounded-lg mb-4"
            placeholder="Name"
            value = {name}
            onChange = {(e)=>setName(e.target.value)}
        />

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

        <button onClick={handleSignUp}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
            SignUp
        </button>

    </div>

</div>
    );
}
export default Signup;
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const logger = require("./middleware/logger");

dotenv.config();

const app = express();

app.use(cors({
        origin: "http://localhost:5173"
    }));

app.use(express.json());

app.get("/", (req,res)=>{

    res.send("Server Running");

});

app.use("/auth",authRoutes);

app.use(logger);

app.use("/tasks",taskRoutes);

const startServer = ()=>{
    try{
        connectDB();
        app.listen(process.env.PORT,()=>{
            console.log(`Server running on ${process.env.PORT}`);
        })
    }catch(err){
        console.log(err);
    }
};

startServer();
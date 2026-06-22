import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/logIn";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/SignUp";


function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        
        <Route  path = "/"
            element = {<Login/>}
        />

        <Route  path = "/"
            element = {<Signup/>}
        />

        <Route  path = "/dashboard"
            element = {<Dashboard/>}
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App;

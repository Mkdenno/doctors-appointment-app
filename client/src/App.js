import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Activity from "./components/Activity";
import { useState, useEffect } from "react";
import AboutDiab from "./AboutDiab";
import Cordinate from "./components/Cordinate";
import Doctors from "./components/Doctors";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
 

  return (
    <div className="  bg-gradient-to-r from-cyan-50 via-blue to-cyan-200" >
      <NavBar user={user} setUser={setUser} />
      {user ? (
        <>    
                {/* <Home user={user} /> */}
 
        <Routes>
        <Route path="/" element={<Home user={user} />} />

        <Route path="/doctors" element={<Doctors user={user}/>} />

        </Routes>
        </>
          

      ) : (
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/doctors" element={<Doctors/>} /> */}

        </Routes>
        
      )}
          
            
            


    </div>
  );
}

export default App;

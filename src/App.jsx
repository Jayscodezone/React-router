import {Routes,Route,Link} from "react-router-dom";
import React from "react";
import './App.css';
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx"
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
   <div id="container">
   <h1>Hello React Router!</h1>
    <div id ="navbar">
    <Link to ="/blue">blue</Link>
    <Link to ="/red">red</Link>
    <Link to ="/home">home</Link>
    </div>
    <div id ="main section">
    <Routes>
      <Route path ="/blue" element ={Blue />} /> {/*Blue Component*/}
      <Route path ="/red"  element ={ Red />} /> {/*Red Component*/}
      <Route path ="/home" element -{Home />}/> {/* Home Component */}
        </Routes>
    </div>
   </div>
    </>
  );
}

export default App

import {Routes,Route,Link} from "react-router-dom";
import React from "react";
import './App.css';
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx"
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
   <div id="container">
   <h1>Hello React Router!</h1>
    <div id ="navbar">
    <ul>
    <li>
    <Link to ="/blue">Blue</Link>
    </li>
    <li>
    <Link to ="/red">Red</Link>
    </li>
    <li>
    <Link to ="/">Home</Link>
    </li>
    <li>
      <Link to = "/contact">contact</Link>
    </li>
    </ul>
    </div>
   
    <div id ="main section">
    {/*Routes*/}
    <Routes>
      <Route path ="/blue" element={<Blue />} /> {/*Blue Component*/}
      <Route path ="/red"  element={<Red />}/> {/*Red Component*/}
      <Route path ="/" element={<Home />} />  {/*Home Component*/}
      <Route path ="/contact" element ={<Contact/>}/>{ /*Contact Component*/}
      
        </Routes>
    </div>
   </div>
  );
}

export default App

import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import Blue from "./components/Blue.jsx";
import Purple from "./components/Purple.jsx";
import Red from "./components/Red.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";


function App() {
  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <ul>
          <ol>
            <Link to="/blue">Blue</Link>
          </ol>
          <ol>
            <Link to="/red">Red</Link>
          </ol>
          <ol>
            <Link to="/purple">Purple</Link>
          </ol>
          <ol>
            <Link to="/">Home</Link>
          </ol>
          <ol>
            <Link to="/contact">Contact</Link>
          </ol>
          <ol>
            <Link to="/about">About</Link>
          </ol>
        </ul>
      </div>

      <div id="main-section">
        {/*Routes*/}
        <Routes>
          <Route path="/blue" element={<Blue />} /> {/*Blue Component*/}
          <Route path="/red" element={<Red />} /> {/*Red Component*/}
          <Route path="/purple" element={<Purple />} /> {/*Purple Component*/}
          <Route path="/" element={<Home />} /> {/*Home Component*/}
          <Route path="/contact" element={<Contact />} />
          {/*Contact Component*/}
          <Route path="/about" element={<About />} /> {/*About Component*/}
         
        </Routes>
      </div>
    </div>
  );
}

export default App;
